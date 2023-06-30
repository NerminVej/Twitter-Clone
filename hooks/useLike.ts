/*
  useLike Custom Hook

  This custom hook is used to handle the like/unlike functionality for a post.
  It utilizes other custom hooks like useCurrentUser, useLoginModal, usePost, and usePosts to fetch and update relevant data.

  Usage:
  const { hasLiked, toggleLike } = useLike({ postId, userId });

  Parameters:
  - postId: The ID of the post to like/unlike.
  - userId: (Optional) The ID of the user associated with the post.

  Returns:
  - hasLiked: A boolean indicating whether the current user has liked the post.
  - toggleLike: A function to toggle the like status of the post.
*/

import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import usePost from "./usePost";
import usePosts from "./usePosts";

// Custom hook to handle liking/unliking a post
const useLike = ({ postId, userId }: { postId: string; userId?: string }) => {
  // Fetch the current user from useCurrentUser
  const { data: currentUser } = useCurrentUser();

  // Fetch the post data and mutate function from usePost
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);

  // Mutate function from usePosts to update the post list
  const { mutate: mutateFetchedPosts } = usePosts(userId);

  // Login modal state and open function from useLoginModal
  const loginModal = useLoginModal();

  // Determine if the current user has liked the post
  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];
    return list.includes(currentUser?.id);
  }, [fetchedPost, currentUser]);

  // Function to toggle the like status of the post
  const toggleLike = useCallback(async () => {
    // If user is not logged in, open the login modal
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      // Determine the request based on the current like status
      if (hasLiked) {
        request = () => axios.delete("/api/like", { data: { postId } });
      } else {
        request = () => axios.post("/api/like", { postId });
      }

      // Perform the like/unlike request
      await request();
      mutateFetchedPost();
      mutateFetchedPosts();

      toast.success("Success");
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [
    currentUser,
    hasLiked,
    postId,
    mutateFetchedPosts,
    mutateFetchedPost,
    loginModal,
  ]);

  return {
    hasLiked,
    toggleLike,
  };
};

export default useLike;

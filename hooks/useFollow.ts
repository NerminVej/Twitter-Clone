/*
  useFollow Custom Hook

  This custom hook is used to handle the follow/unfollow functionality for a user.
  It utilizes other custom hooks like useCurrentUser, useLoginModal, and useUser to fetch and update relevant data.

  Usage:
  const { isFollowing, toggleFollow } = useFollow(userId);

  Returns:
  - isFollowing: A boolean indicating whether the current user is following the specified user.
  - toggleFollow: A function to toggle the follow status of the user.
*/

import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";

// Custom hook to handle following/unfollowing a user
const useFollow = (userId: string) => {
  // Fetch the current user and mutate function from useCurrentUser
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();

  // Mutate function from useUser to update the fetched user
  const { mutate: mutateFetchedUser } = useUser(userId);

  // Login modal state and open function from useLoginModal
  const loginModal = useLoginModal();

  // Determine if the current user is following the specified user
  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || [];
    return list.includes(userId);
  }, [currentUser, userId]);

  // Function to toggle the follow status of the user
  const toggleFollow = useCallback(async () => {
    // If user is not logged in, open the login modal
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      // Determine the request based on the current follow status
      if (isFollowing) {
        request = () => axios.delete("/api/follow", { data: { userId } });
      } else {
        request = () => axios.post("/api/follow", { userId });
      }

      // Perform the follow/unfollow request
      await request();
      mutateCurrentUser();
      mutateFetchedUser();

      toast.success("Success");
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [
    currentUser,
    isFollowing,
    userId,
    mutateCurrentUser,
    mutateFetchedUser,
    loginModal,
  ]);

  return {
    isFollowing,
    toggleFollow,
  };
};

export default useFollow;

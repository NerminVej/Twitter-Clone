/*
  usePost Custom Hook

  This custom hook is used to fetch and manage a specific post's data.
  It utilizes SWR, a data fetching library, to handle the API requests.

  Usage:
  const { data, error, isLoading, mutate } = usePost(postId);

  Parameters:
  - postId: A string representing the ID of the post.

  Returns:
  An object containing the following properties:
  - data: The fetched post data.
  - error: An error object if there was an error while fetching the post.
  - isLoading: A boolean indicating if the data is currently being loaded.
  - mutate: A function to trigger manual revalidation of the data.
*/

import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const usePost = (postId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    postId ? `/api/posts/${postId}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePost;

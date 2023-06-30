/*
  usePosts Custom Hook

  This custom hook is used to fetch and manage posts data.
  It utilizes SWR, a data fetching library, to handle the API requests.

  Usage:
  const { data, error, isLoading, mutate } = usePosts(userId);

  Parameters:
  - userId (optional): A string representing the user ID. If provided, the hook fetches posts specific to the user.

  Returns:
  An object containing the following properties:
  - data: The fetched posts data.
  - error: An error object if there was an error while fetching the posts.
  - isLoading: A boolean indicating if the data is currently being loaded.
  - mutate: A function to trigger manual revalidation of the data.
*/

import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const usePosts = (userId?: string) => {
  const url = userId ? `/api/posts?userId=${userId}` : "/api/posts";
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePosts;

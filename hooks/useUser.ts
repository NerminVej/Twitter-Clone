/*
  useUser Custom Hook

  This custom hook fetches user data based on the provided userId.
  It uses the useSWR hook from the swr library to handle data fetching and caching.

  Usage:
  const { data, error, isLoading, mutate } = useUser(userId);

  Arguments:
  - userId: A string representing the ID of the user to fetch.

  Returns:
  An object containing the following properties:
  - data: The fetched user data.
  - error: An error object if an error occurred during fetching.
  - isLoading: A boolean indicating whether the data is currently being fetched.
  - mutate: A function to manually trigger a data mutation/update.
*/

import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/users/${userId}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;

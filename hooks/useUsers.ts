/*
  useUsers Custom Hook

  This custom hook fetches user data from the "/api/users" endpoint.
  It uses the useSWR hook from the swr library to handle data fetching and caching.

  Usage:
  const { data, error, isLoading, mutate } = useUsers();

  Returns:
  An object containing the following properties:
  - data: The fetched user data.
  - error: An error object if an error occurred during fetching.
  - isLoading: A boolean indicating whether the data is currently being fetched.
  - mutate: A function to manually trigger a data mutation/update.
*/

import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/users", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;

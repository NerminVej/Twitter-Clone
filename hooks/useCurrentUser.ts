/*
  useCurrentUser Custom Hook

  This custom hook is used to fetch the current user data.
  It uses the SWR library to make the API request to '/api/current' using the fetcher function.

  Usage:
  const { data, error, isLoading, mutate } = useCurrentUser();

  Returns:
  - data: Fetched data
  - error: Error from the API request
  - isLoading: Loading state
  - mutate: Function to manually trigger a data re-fetch
*/

import useSWR from "swr";
import fetcher from "@/libs/fetcher";

// Custom hook to fetch the current user data
const useCurrentUser = () => {
  // Use SWR to fetch data from '/api/current' using the fetcher function
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  // Return the fetched data, error, loading state, and mutate function
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;

/*
  useNotifications Custom Hook

  This custom hook is used to fetch and manage notifications data.
  It utilizes SWR, a data fetching library, to handle the API requests.

  Usage:
  const { data, error, isLoading, mutate } = useNotifications(userId);

  Parameters:
  - userId (optional): A string representing the user ID. If provided, the hook fetches notifications specific to the user.

  Returns:
  An object containing the following properties:
  - data: The fetched notifications data.
  - error: An error object if there was an error while fetching the notifications.
  - isLoading: A boolean indicating if the data is currently being loaded.
  - mutate: A function to trigger manual revalidation of the data.
*/

import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useNotifications = (userId?: string) => {
  const url = userId ? `/api/notifications/${userId}` : null;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useNotifications;

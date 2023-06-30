import axios from "axios";

// Function to fetch data from a given URL using axios
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

// Export the fetcher function
export default fetcher;

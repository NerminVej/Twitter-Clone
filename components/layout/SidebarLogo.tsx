/*
  SidebarLogo Component

  This component represents the logo in the sidebar of your application.
  It renders a Twitter icon and handles the click event to navigate to the home page.
  
  Usage:
  <SidebarLogo />
*/

import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")} // Navigate to the home page when clicked
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    "
    >
      <BsTwitter size={28} color="white" />{" "}
      {/* Render the Twitter icon with the specified size and color */}
    </div>
  );
};

export default SidebarLogo;

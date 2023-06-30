/*
  SidebarTweetButton Component

  This component represents the tweet button in the sidebar of your application.
  It renders a feather icon and provides a click event to navigate to a tweet creation page.

  Usage:
  <SidebarTweetButton />
*/

import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import { useRouter } from "next/router";

const SidebarTweetButton = () => {
  const router = useRouter();

  return (
    <div>
      {/* Render the tweet button for mobile view */}
      <div
        className="
        mt-6
        lg:hidden 
        rounded-full 
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center 
        bg-sky-500 
        hover:bg-opacity-80 
        transition 
        cursor-pointer
      "
        onClick={() => router.push("/create-tweet")} // Navigate to the tweet creation page when clicked
      >
        <FaFeather size={24} color="white" />{" "}
        {/* Render the feather icon with the specified size and color */}
      </div>

      {/* Render the tweet button for desktop view */}
      <div
        className="
        mt-6
        hidden 
        lg:block 
        px-4
        py-2
        rounded-full
        bg-sky-500
        hover:bg-opacity-90 
        cursor-pointer
      "
        onClick={() => router.push("/create-tweet")} // Navigate to the tweet creation page when clicked
      >
        <p
          className="
            hidden 
            lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]
        "
        >
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;

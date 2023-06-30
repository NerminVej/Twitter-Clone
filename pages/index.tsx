/*
  Home Page

  This is the home page component. It renders the header, a form, and a post feed.

  Usage:
  This component is typically used as the main component in the home page.
*/

import PostFeed from "@/components/posts/PostFeed";
import Header from "@/components/Header";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  );
}

/*
  PostFeed Component

  This component represents a feed of posts. It fetches the posts based on the provided userId and renders PostItem components for each post.

  Props:
  - userId: The ID of the user for which to fetch the posts.

  Usage:
  <PostFeed userId={userId} />
*/

import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostFeed;

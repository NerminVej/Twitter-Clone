/*
  CommentFeed Component

  This component represents a feed of comments. It renders a list of CommentItem components based on the provided comments data.

  Props:
  - comments: An array of comment objects.

  Usage:
  <CommentFeed comments={commentsData} />
*/

import CommentItem from "./CommentItem";

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment: Record<string, any>) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;

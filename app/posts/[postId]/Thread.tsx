"use client";
import { Container, Row, Spacer } from "@nextui-org/react";
import Header from "./Header";
import SinglePost from "../SinglePost";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { SinglePostType, SafeUser } from "@/app/types";


interface ThreadProps {
  post: SinglePostType,
  currentUser?: SafeUser | null;
}
const Thread: React.FC<ThreadProps> = ({
  post,
  currentUser
}) => {
  return (
    <Container display="flex" alignItems="center" xs>
      <Spacer y={0.5} />
      <Row>
        <Header />
      </Row>
      <SinglePost
        userId={post.}
        id={post.id}
        name={post.user.name}
        avatar={post.user.image}
        createdAt={post.createdAt}
        title={post.title}
        hearts={post.hearts}
        comments={post.comments}
      />
      <AddComment postId={post.id} />
      {post.comments?.map((comment) => (
        <Comment
          key={comment.id}
          userId={comment.user.id}
          id={comment.id}
          name={comment.user.name}
          avatar={comment.user.image}
          createdAt={comment.createdAt}
          title={comment.title}
        />
      ))}
    </Container>
  );
}

export default Thread;
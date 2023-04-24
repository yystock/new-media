"use client";
import { Container, Grid, Row, Spacer } from "@nextui-org/react";
import AddPost from "./AddPost";
import Header from "./Header";
import SinglePost from "./SinglePost";
import { PostType } from "../types";
import { SafeUser } from "../types";

interface FeedProps {
  data: PostType[],
  currentUser?: SafeUser | null;
}
const Feed: React.FC<FeedProps> = ({
  data,
  currentUser
}) => {
  return (
    <main>
      <Container display="flex" alignItems="center" xs>
        <Spacer y={0.5} />
        <Row>
          <Header />
        </Row>
        <Row>
          <AddPost currentUser={currentUser}/>
        </Row>

        {data?.map((post) => (
          <SinglePost
            id={post.id}
            userId={post.user.id}
            name = {post.user.name}
            avatar={post.user.image}
            createdAt={post.createdAt}
            title={post.title}
            hearts={post.hearts}
            comments={post.comments}
          />
        ))}
      </Container>
    </main>
  );
}

export default Feed;
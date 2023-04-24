import Feed from "./Feed";
import getPosts, { 
  PostsParams
}  from "../actions/getPosts"
import getCurrentUser from "@/app/actions/getCurrentUser";

interface PostsProps {
  searchParams: PostsParams
};

export default async function Posts({ searchParams }: PostsProps) {
  const currentUser = await getCurrentUser();
  const data =  await getPosts(searchParams);
  console.log(data);
  return (
    <main>
      <Feed 
      data={data}
      currentUser={currentUser} />
    </main>
  );
}
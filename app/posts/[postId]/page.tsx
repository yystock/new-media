import Post from "../SinglePost";
import Thread from "./Thread";
import getPostById from "@/app/actions/getPostById";
import getCurrentUser from "@/app/actions/getCurrentUser";
interface IParams {
  postId?: string;
}
export default async function PostDetails(
 {params}: {params: IParams}) {
  const currentUser = await getCurrentUser();
  const data = await getPostById(params);

  return <Thread post={data} currentUser={currentUser}/>;
}
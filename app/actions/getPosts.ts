import prisma from "../libs/prismadb";

export interface PostsParams {
  userId?: string;
  creaatedAt?: string;
  title?:     String;
}

export default async function getPosts(
  params: PostsParams
) {
  try {
    const {
      userId,
      creaatedAt, 
      title, 
    } = params;

    const data = await prisma.post.findMany({
        include: {
        user: true,
        hearts: true,
        comments: true,
        },
        orderBy: {
        createdAt: "desc",
        },
    })

    const safeData = data.map((d) => ({
      ...d,
      createdAt: d.createdAt.toISOString(),
    }));

    return safeData;
  } catch (error: any) {
    throw new Error(error);
  }
}

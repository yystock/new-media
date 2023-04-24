import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from 'next/server';
import prisma from "../../libs/prismadb";
export async function GET(request: Request) {
 
  try {
    const data = await prisma.post.findMany({
      include: {
        user: true,
        hearts: true,
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(data)
  } catch (error) {
    return new Response("Error has occured while fetching posts",{
      status: 403})
  }
}

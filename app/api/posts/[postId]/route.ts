// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/prisma/client";

// export async function GET(request: Request) {
   
//     try {
    
//       const data = await prisma.post.findUnique({
//         where: {
//           id: request.query.postId as string,
//         },
//         include: {
//           user: true,
//           likes: true,
//           comments: {
//             orderBy: {
//               createdAt: "desc",
//             },
//             include: {
//               user: true,
//             },
//           },
//         },
//       });
//       return res.status(200).json(data);
//     } catch (err) {
//       res
//         .status(403)
//         .json({ err: "Error has occured while getting post details" });
//     }
//   }
// }
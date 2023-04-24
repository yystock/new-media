import { Post, User, Comment, Heart } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type PostType = {
    createdAt: string;
    id: string;
    title: string;
    published: boolean;
    userId: string;
    user: User;
    comments: Comment[];
    hearts: Heart[];
};


export type SinglePostType = {
  id: string;
  userId: string;
  name: string | null;
  avatar: string | null;
  createdAt: string;
  title: string;
  hearts: Heart[];
  comments: Comment[];
};



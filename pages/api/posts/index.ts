import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";
import prisma from "@/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(`Received ${req.method} request to /api/posts`);

    if (req.method === 'POST') {
      console.log('Handling POST request');
      
      const { currentUser } = await serverAuth(req, res);
      const { body } = req.body;

      const post = await prisma.post.create({
        data: {
          body,
          userId: currentUser.id
        }
      });

      console.log('Post created:', post);
      return res.status(200).json(post);
    }

    if (req.method === 'GET') {
      console.log('Handling GET request');
      
      const { userId } = req.query;

      console.log('User ID:', userId);

      let posts;

      if (userId && typeof userId === 'string') {
        posts = await prisma.post.findMany({
          where: {
            userId
          },
          include: {
            user: true,
            comments: true
          },
          orderBy: {
            createdAt: 'desc'
          },
        });
      } else {
        posts = await prisma.post.findMany({
          include: {
            user: true,
            comments: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        });
      }

      console.log('Fetched posts:', posts);
      return res.status(200).json(posts);
    }
  } catch (error) {
    console.error('Error in /api/posts:', error);
    return res.status(400).end();
  }
}

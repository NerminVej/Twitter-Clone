/*
  Users API

  This API route handles fetching all users.
  It expects a GET request to fetch all users.

  Usage:
  This file is typically used as an API route in Next.js.

  Example:
  // pages/api/users.ts
  import usersHandler from '@/api/users-handler';

  export default usersHandler;
*/

import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}

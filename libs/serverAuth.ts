import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

// API route handler for server-side authentication
const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  // Get the session using getServerSession from next-auth
  const session = await getServerSession(req, res, authOptions);

  // Check if user email exists in the session
  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  // Find the current user using the email from the session
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  // Check if the current user exists
  if (!currentUser) {
    throw new Error("Not signed in");
  }

  // Return the current user
  return { currentUser };
};

export default serverAuth;

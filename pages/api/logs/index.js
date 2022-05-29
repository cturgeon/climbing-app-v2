import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "GET") {
    try {
      const logs = await prisma.log.findMany({
        where: {
          userId: session.user.userId,
        },
      });
      return res.status(201).json({ logs: logs });
    } catch (error) {
      return res.status(500).json({ message: "User not found" });
    }
  }
}

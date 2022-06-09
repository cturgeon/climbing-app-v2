import { getSession } from "next-auth/react";

import { prisma } from "../../../../prisma/db";

async function createLog(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ unauthorized: true });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  const log = await prisma.log.create({
    data: {
      attempts: req.body.attempts,
      grade: req.body.grade,
      route: { connect: { id: req.body.routeId } },
      wall: { connect: { id: req.body.wall.id } },
      user: { connect: { id: user.id } },
    },
  });

  if (log.id) {
    return res.status(200).json({ message: "Log added" });
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
}

async function getLogs(req, res) {
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
      return res.status(500).json({ message: error });
    }
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    return createLog(req, res);
  }
  if (req.method === "GET") {
    return getLogs(req, res);
  }
}

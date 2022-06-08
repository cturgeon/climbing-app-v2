import { getSession } from "next-auth/react";

import { prisma } from "../../../../prisma/db";

async function createComment(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ unauthorized: true });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  const comment = await prisma.comment.create({
    data: {
      comment: req.body.comment,
      name: user.name,
      route: { connect: { id: req.body.routeId } },
      user: { connect: { id: user.id } },
    },
  });

  if (comment.id) {
    return res.status(200).json({ message: "Comment added" });
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
}

async function getComments(req, res) {
  const routeId = req.query.routeId;
  if (req.method === "GET") {
    try {
      const comments = await prisma.comment.findMany({
        where: {
          routeId: routeId,
        },
      });
      return res.status(201).json({ comments: comments });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    return createComment(req, res);
  }
  if (req.method === "GET") {
    return getComments(req, res);
  }
}

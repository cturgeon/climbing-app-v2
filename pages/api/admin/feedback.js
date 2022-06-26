import { getSession } from "next-auth/react";

import { prisma } from "../../../prisma/db";

async function createComment(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ unauthorized: true });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  const comment = await prisma.feedback.create({
    data: {
      comment: req.body.comment,
      user: { connect: { id: user.id } },
    },
  });

  if (comment.id) {
    return res.status(201).json({ message: comment });
  } else {
    return res.status(500).json({ message: "Could not post data" });
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    return createComment(req, res);
  }
}

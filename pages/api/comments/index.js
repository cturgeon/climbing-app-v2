import { getSession } from "next-auth/react";

import { prisma } from "../../../prisma/db";

async function createComment(req, res) {
  const session = await getSession({ req });
  sessionCheck(session);

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const comment = await prisma.climb.update({
    where: {
      gymId: req.body.gymId,
      wallId: req.body.wallId,
      climbId: req.body.climbId,
    },
    data: {
      Comment: {
        comment: req.body.text,
        userId: user.name,
      },
    },
  });

  if (comment.id) {
    return res.status(200).json({ message: "comment added" });
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
}

async function getComments(req, res) {
  //
}

export default function handler(req, res) {
  if (req.method === "GET") {
    return getComments(req, res);
  }
  if (req.method === "POST") {
    return createComment(req, res);
  }
}

function sessionCheck(session) {
  if (!session) {
    return res.status(401).json({ unauthorized: true });
  }
}

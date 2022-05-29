import { getSession } from "next-auth/react";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createLog(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ unauthorized: true });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  //   console.log(req.body);
  //   if (!req.body.attempts || !req.body.grade || !req.body.wallName) {
  //     return res.status(500).json({ error: "missing data" });
  //   }

  const log = await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      Log: {
        create: {
          attempts: req.body.attempts,
          grade: req.body.grade,
          wall: req.body.wallName,
        },
      },
    },
  });

  if (log.id) {
    return res.status(200).json({ message: "Log added" });
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    return createLog(req, res);
  }
  if (req.method === "GET") {
    return res.status(200).json({ message: "hi" });
  }
}

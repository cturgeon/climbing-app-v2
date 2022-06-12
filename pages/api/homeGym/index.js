import { getSession } from "next-auth/react";

import { prisma } from "../../../prisma/db";

async function setHomeGym(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ unauthorized: true });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const gym = await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      gymId: req.body,
    },
  });

  if (gym.id) {
    return res.status(200).json({ message: "Gym added" });
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    return setHomeGym(req, res);
  }
  if (req.method === "GET") {
    return res.status(200).json({ message: "hi" });
  }
}

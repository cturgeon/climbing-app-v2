import { prisma } from ".././../../prisma/db";

async function getHomeGym(req, res) {
  const userId = req.body.userId;
  const homeGym = await prisma.user.findUnique({
    where: { id: userId },
    select: { gymId: true },
  });

  return res.stautus(201).json({ homeGym: homeGym });
}

export default function handler(req, res) {
  if (req.method === "GET") {
    return getHomeGym(req, res);
  }
}

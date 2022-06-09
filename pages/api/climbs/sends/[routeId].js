import { prisma } from "../../../../prisma/db";

async function getSends(req, res) {
  const routeId = req.query.routeId;
  const listOfUserIdsWhoSentRoute = await prisma.log.findMany({
    where: {
      routeId: routeId,
    },
    distinct: ["userId"],
    select: {
      user: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  return res.json({ users: listOfUserIdsWhoSentRoute });
}

export default function handler(req, res) {
  if (req.method === "POST") {
  }
  if (req.method === "GET") {
    return getSends(req, res);
  }
}

import { prisma } from "../../../../prisma/db";

async function getSends(req, res) {
  const routeId = req.query.routeId;
  const listOfUsersWhoSentRoute = await prisma.route.findMany({
    where: { id: routeId },
    select: { userId: true },
  });
  return res.json({ message: listOfUsersWhoSentRoute });
}

export default function handler(req, res) {
  if (req.method === "POST") {
  }
  if (req.method === "GET") {
    return getSends(req, res);
  }
}

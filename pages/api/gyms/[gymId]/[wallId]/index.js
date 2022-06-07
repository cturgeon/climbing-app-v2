import { prisma } from "../../../../../prisma/db";

async function createRoute(req, res) {
  const wall = req.body.wall;
  const { name, color, grade, description, image } = req.body.route;
  const routeData = await prisma.route.create({
    data: {
      name,
      color,
      grade,
      description,
      image,
      wall: { connect: { id: wall.id } },
    },
  });
  return res.status(200).json({ route: routeData });
}

async function getRoutes(req, res) {
  const wallId = req.query.wallId;
  const routes = await prisma.route.findMany({
    where: { wallId: wallId.id },
  });
  return res.status(201).json({ routes: routes });
}

// these operations handle my Climbing Route information
export default function handler(req, res) {
  if (req.method === "POST") {
    return createRoute(req, res);
  }

  if (req.method === "GET") {
    return getRoutes(req, res);
  }

  if (req.method === "DELETE") {
  }

  if (req.method === "PUT") {
  }
}

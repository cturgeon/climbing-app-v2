import { prisma } from "../../../../prisma/db";

async function addWall(req, res) {
  const gymId = req.body.gym;
  const wall = req.body.wall;
  try {
    const newWall = await prisma.wall.create({
      data: {
        name: wall.name,
        image: wall.image,
        gym: {
          connect: { id: gymId.id },
        },
      },
    });
    return res.status(201).json({ wall: newWall });
  } catch (error) {
    return res.status(500).json({ message: "Could not add wall to gym" });
  }
}

async function getWalls(req, res) {
  const gymId = req.query.gymId;
  const walls = await prisma.wall.findMany({
    where: { gymId: gymId },
  });
  return res.status(201).json({ walls: walls });
}

export default function handler(req, res) {
  if (req.method === "POST") {
    return addWall(req, res);
  }

  if (req.method === "GET") {
    return getWalls(req, res);
  }

  if (req.method === "DELETE") {
  }

  if (req.method === "PUT") {
  }
}

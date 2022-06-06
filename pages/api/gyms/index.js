import { prisma } from "../../../prisma/db";

async function createGym(req, res) {
  const { name, address, description, image } = req.body;
  const result = await prisma.gym.create({
    data: {
      name,
      address,
      description,
      image,
    },
  });

  if (result.id) {
    return res.status(200).json({ message: "Gym added", gym: result });
  } else {
    return res.status(500).json({ error: "Something went wrong" });
  }
}

async function getGyms(req, res) {
  try {
    const gyms = await prisma.gym.findMany();
    return res.status(201).json({ gyms });
  } catch (error) {
    return res.status(500).json({ error: "something went wrong" });
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    return createGym(req, res);
  }
  if (req.method === "GET") {
    return getGyms(req, res);
  }
  if (req.method === "DELETE") {
  }
}

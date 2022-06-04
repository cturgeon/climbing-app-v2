import { useRouter } from "next/router";
import { ObjectId } from "mongodb";

import {
  connectToDatabase,
  getGymById,
  updateGym,
} from "../../../helpers/db-util";

export default async function handler(req, res) {
  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "could not connect to DB!" });
    return;
  }

  if (req.method === "POST") {
  }

  if (req.method === "GET") {
  }

  if (req.method === "DELETE") {
  }

  if (req.method === "PUT") {
    const gymId = req.body._id;
    let gymData = req.body;
    gymData._id = ObjectId(gymId);
    const result = await updateGym(
      client,
      "gym-data",
      { _id: ObjectId(gymId) },
      gymData
    );
    try {
      res.status(201).json({ message: result });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "could not update gym" });
    }
  }

  client.close();
}

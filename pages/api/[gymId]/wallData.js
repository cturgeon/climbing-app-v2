import { ObjectId } from "mongodb";
import {
  connectToDatabase,
  insertGym,
  deleteGym,
  getAllGymData,
  getGymById,
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

  client.close();
}

import { ObjectId } from "mongodb";
import {
  connectToDatabase,
  insertGym,
  deleteGym,
  getAllGymData,
  getGymById,
  updateGym,
} from "../../helpers/db-util";

export default async function handler(req, res) {
  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "could not connect to DB!" });
    return;
  }

  if (req.method === "POST") {
    const { name, address, description, image } = req.body;

    // TODO add more validation and complete
    if (!name || !address || !description || !image) {
      return;
    }

    const newGymData = {
      name,
      address,
      description,
      image,
      walls: [],
    };

    let result;
    try {
      result = await insertGym(client, "gym-data", newGymData);
      newGymData._id = result.insertedId;
      res
        .status(201)
        .json({ message: "stored new gym data", message: newGymData });
    } catch (error) {
      res.status(500).json({ message: "failed to submit data" });
      return;
    }
  }
  if (req.method === "GET") {
    try {
      const gymData = await getAllGymData(client, "gym-data", { _id: -1 });
      res.status(201).json({ gymData: gymData });
    } catch (error) {
      res.status(500).json({ message: "Getting data failed" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await deleteGym(client, "gym-data", { _id: ObjectId(req.body.id) });
      res.status(201).json({ message: "Deleted gym from database" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete gym data" });
    }
  }

  if (req.method === "PUT") {
    try {
      await updateGym(
        client,
        "gym-data",
        { _id: ObjectId(req.body.id) },
        { wall: req.body.wallData }
      );
      res.status(201).json({ message: "Updated gym" });
    } catch (error) {
      res.status(500).json({ message: "failed to update gym" });
    }
  }

  client.close();
}

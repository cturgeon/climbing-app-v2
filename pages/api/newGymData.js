import { ObjectId } from "mongodb";
import {
  connectToDatabase,
  insertGym,
  deleteGym,
  getAllGymData,
  getGymById,
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

    const newData = {
      name,
      address,
      description,
      image,
    };

    let result;
    try {
      result = await insertGym(client, "gym-data", newData);
      newData._id = result.insertedId;
      res
        .status(201)
        .json({ message: "stored new gym data", message: newData });
    } catch (error) {
      res.status(500).json({ message: "failed to submit data" });
      return;
    }
  }
}

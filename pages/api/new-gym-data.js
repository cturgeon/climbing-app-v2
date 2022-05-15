import { ObjectId } from "mongodb";
import {
  connectToDatabase,
  insertGym,
  deleteGym,
  getAllGymData,
  getGymById,
} from "../../helpers/db-util";

export default function handler(req, res) {
    let client;

    try {
      client = await connectToDatabase();
    } catch (error) {
      res.status(500).json({ message: "could not connect to DB!" });
      return;
    }

    if (req.method === "POST") {
        const {name, address, description, image} = req.body;

        // TODO add more validation
        if (!name || !address || !description) {
            res.status(422).json({ message: "Invalid inputs" });
            return;
        }

        const newGymData = {
            name,
            address,
            description,
            image
        }

        let result;
        
        try {
            result = await insertGym(client, 'gym-data', newGymData)
            newGymData._id = result.insertedId;
            res.status(201).json({message: 'stored new gym', message: newGymData})
        } catch (error) {
            client.close();
            res.status(500).json({ message: "storing new data failed" });
            return;
        }

    }
    
    if (req.method === "GET") {
        try {
            
        } catch (error) {
            
        }
    }
    
    if (req.method === "DELETE") {
        try {
            
        } catch (error) {
            
        }
    }
}

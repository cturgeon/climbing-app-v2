import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.trzrj.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );
  return client;
}

export async function insertGym(client, collection, gymData) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(gymData);
  return result;
}

export async function getAllGymData(client, collection, sort) {
  const db = client.db();
  const gymData = await db.collection(collection).find().sort(sort).toArray();
  return gymData;
}

export async function deleteGym(client, collection, id) {
  const db = client.db();
  await db.collection(collection).deleteOne(id);
  return;
}

export async function getGymById(client, collection, id) {
  const db = client.db();
  const gymData = await db.collection(collection).findOne(id);
  return gymData;
}

export async function getGymIds(client, collection) {
  const db = client.db();
  const result = await db.collection(collection).distinct("_id", {}, {});
  return result;
}

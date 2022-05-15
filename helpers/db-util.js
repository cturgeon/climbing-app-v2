import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect();
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

export async function getGymById(client, collecion, id) {
  const db = client.db();
  const gymData = await db.collection(collection).find(id);
  return gymData;
}

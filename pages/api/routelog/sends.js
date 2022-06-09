import { prisma } from "../../../prisma/db";

async function getSends(req, res) {}

export default function handler(req, res) {
  if (req.method === "POST") {
  }
  if (req.method === "GET") {
    return getSends(req, res);
  }
}

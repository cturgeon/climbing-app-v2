async function createWall(req, res) {}
async function getWalls(req, res) {}

export default function handler(req, res) {
  if (req.method === "POST") {
    return createGym(req, res);
  }

  if (req.method === "GET") {
  }

  if (req.method === "DELETE") {
  }

  if (req.method === "PUT") {
  }
}

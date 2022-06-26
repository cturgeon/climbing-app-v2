async function createComment(req, res) {}

export default function handler(req, res) {
  if (req.method === "POST") {
    return createComment(req, res);
  }
}

async function createComment(req, res) {
  return res.status(201).json({ message: "got it!" });
}

export default function handler(req, res) {
  if (req.method === "POST") {
    return createComment(req, res);
  }
}

const handler = (req, res) => {
  if (req.method === "GET") {
    console.log("product", req.query);
  }

  return res.json({ message: `product dynamic ${req.query.id}` });
};

export default handler;

import connectToDB from "../../utils/db";

const handler = (req, res) => {
  connectToDB();

  return res.json({ message: "api route" });
};

export default handler;

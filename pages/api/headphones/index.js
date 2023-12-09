import connectToDB from "../../utils/db";
// import fs from "fs";
// import path from "path";

import headphonesModels from "../../../models/headphones";

const handler = (req, res) => {
  connectToDB();

  switch (req.method) {
    case "GET": {
      const dbPath = path.join(process.cwd(), "data", "db.json");

      const data = fs.readFileSync(dbPath);

      const parsedData = JSON.parse(data);
      console.log(parsedData);

      return res.json({ message: "api route headphones GET" });
      break;
    }
    case "POST": {
      const { name, price, off } = req.body;

      headphonesModels.create({ name, price, off });
      return res.json({ message: "api route headphones POST" });
      break;
    }
    case "PUT": {
      return res.json({ message: "api route headphones PUT" });
      break;
    }
    case "DELETE": {
      return res.json({ message: "api route headphones DELETE" });
      break;
    }

    default:
      break;
  }

  return res.json({ message: "api route headphones" });
};

export default handler;

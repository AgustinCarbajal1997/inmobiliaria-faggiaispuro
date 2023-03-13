import mongoConnection from "../../lib/dbConnect";
import RealEstate from "../../models/RealEstate";

export default async function handler(req, res) {
  await mongoConnection();
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const data = await RealEstate.find({}).limit(7);
        return res.status(200).json({ success: true, data });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    default:
      return res.status(500).json({ success: false, error: "Server failed" });
  }
}

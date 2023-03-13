import mongoConnection from "../../../lib/dbConnect";
import RealEstate from "../../../models/RealEstate";

export default async function handler(req, res) {
  await mongoConnection();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const articleToUpdate = await RealEstate.findById(req.query.id);
        const isHighlighted = articleToUpdate.highlighted;
        await RealEstate.findByIdAndUpdate(req.query.id, {
          $set: { highlighted: !isHighlighted },
        });
        return res.status(200).json({ message: "updated" });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }

    default:
      return res.status(500).json({ success: false, error: "Server failed" });
  }
}

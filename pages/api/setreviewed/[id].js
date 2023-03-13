import mongoConnection from "../../../lib/dbConnect";
import Message from "../../../models/Message";

export default async function handler(req, res) {
  await mongoConnection();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const articleToUpdate = await Message.findById(req.query.id);
        const isReviewed = articleToUpdate.reviewed;
        await Message.findByIdAndUpdate(req.query.id, {
          $set: { reviewed: !isReviewed },
        });
        return res.status(200).json({ message: "updated" });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: "Bad request" });
      }

    default:
      return res.status(500).json({ success: false, error: "Server failed" });
  }
}

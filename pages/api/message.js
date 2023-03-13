import mongoConnection from "../../lib/dbConnect";
import Message from "../../models/Message";

export default async function handler(req, res) {
  await mongoConnection();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        let notReviewed = 0;
        const response = await Message.find({}).sort({ createdAt: -1 });
        if (response.length > 0) {
          response.forEach((el) => {
            if (!el.reviewed) return notReviewed += 1;
          });
        }
        return res
          .status(200)
          .json({ messages: response, reviewed: notReviewed });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    case "POST":
      try {
        const message = new Message(req.body);
        await message.save();
        return res.status(200).json({ success: true, message: "Created" });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    default:
      return res.status(500).json({ success: false, error: "Server failed" });
  }
}

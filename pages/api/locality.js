import mongoConnection from "../../lib/dbConnect";
import Locality from "../../models/Locality";
export default async function handler(req, res) {
  await mongoConnection();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const response = await Locality.find({});
        return res.status(200).json({ localities: response });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    case "POST":
      try {
        const locality = new Locality(req.body);
        await locality.save();
        return res.status(200).json({ success: true, message: "Created" });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    case "PUT":
      try {
        if (req.body.operation === "add") {
          await Locality.findByIdAndUpdate(req.body.id, {
            $push: { zones: req.body.zone },
          });
        }
        if (req.body.operation === "del") {
          await Locality.findByIdAndUpdate(req.body.id, {
            $pull: { zones: req.body.zone },
          });
        }
        return res.status(200).json({ success: true, message: "Updated" });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    case "DELETE":
      try {
        await Locality.findByIdAndDelete(req.body.id);
        return res.status(200).json({ success: true, message: "Deleted" });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    default:
      return res.status(500).json({ success: false, error: "Server failed" });
  }
}

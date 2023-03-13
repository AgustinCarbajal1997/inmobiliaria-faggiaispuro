import mongoConnection from "../../../lib/dbConnect";
import RealEstate from "../../../models/RealEstate";
import cloudinary from "../../../lib/cloudinaryConnect";
const marked = require("marked");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);
export default async function handler(req, res) {
  await mongoConnection();
  const {
    method,
    query: { id },
  } = req;
  switch (method) {
    case "GET":
      try {
        const response = await RealEstate.findById(id);
        return res.status(200).json({ propiedad: response });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    case "PUT":
      try {
        if (req.body.description) {
          req.body.sanitizedHtml = dompurify.sanitize(
            marked.parse(req.body.description)
          );
        }
        await RealEstate.findByIdAndUpdate(id, req.body, {
          runValidators: true,
          new: true,
        });
        return res.status(200).json({ success: true, message: "Updated" });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    case "DELETE":
      try {
        await RealEstate.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Deleted" });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    default:
      return res.status(500).json({ success: false, error: "Server failed" });
  }
}

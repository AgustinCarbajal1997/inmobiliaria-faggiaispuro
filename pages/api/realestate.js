import mongoConnection from "../../lib/dbConnect";
import RealEstate from "../../models/RealEstate";

export default async function handler(req, res) {
  await mongoConnection();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const response = await RealEstate.find({}).sort({ createdAt: -1 });
        const propiedades = response.map((doc) => {
          const propiedad = doc.toObject();
          propiedad._id = `${propiedad._id}`;
          return propiedad;
        });
        return res.status(200).json({ propiedades });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    case "POST":
      try {
        const realestate = new RealEstate(req.body);
        await realestate.save();
        return res.status(200).json({ success: true, message: "Created" });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    default:
      return res.status(500).json({ success: false, error: "Server failed" });
  }
}

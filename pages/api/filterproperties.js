import mongoConnection from "../../lib/dbConnect";
import RealEstate from "../../models/RealEstate";

export default async function handler(req, res) {
  await mongoConnection();
  const { method, body } = req;

  const booleanFields = [
    "condition",
    "category",
    "locality",
    "neighborhood",
    "bedrooms",
    "bathrooms",
    "garage",
    "balcony",
    "pool",
    "barbecue",
    "privateNeighborhood",
    "backyard",
    "grill",
    "barter",
    "alarm",
    "sum",
    "elevator",
    "laundry",
    "credit",
  ];
  const adapter = booleanFields.reduce((ac, item) => {
    if (body[item]) return { ...ac, [item]: body[item] };
    return ac;
  }, {});

  switch (method) {
    case "POST":
      try {
        const data = await RealEstate.find({ ...adapter });
        return res
          .status(200)
          .json({ success: true, message: "Created", data });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }
    default:
      return res.status(500).json({ success: false, error: "Server failed" });
  }
}

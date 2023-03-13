import mongoConnection from "../../lib/dbConnect";
import RealEstate from "../../models/RealEstate";
import sanitizeString from "string-sanitizer";

export default async function handler(req, res) {
  await mongoConnection();
  const {
    method,
    query: { q },
  } = req;
  switch (method) {
    case "GET":
      try {
        if (!q)
          return res
            .status(400)
            .json({ success: false, error: "Bad request. Insert query" });
        let data;
        if (Array.isArray(q)) {
          let querySanitized = q.map((item) => sanitizeString.sanitize(item));
          const regexList = querySanitized.map(
            (item) => new RegExp(`${item}`, "i")
          );
          const query = {
            title: { $all: regexList },
          };
          data = await RealEstate.find(query);
        } else {
          let querySanitized = sanitizeString.sanitize(q);
          querySanitized = [q];
          const regexList = querySanitized.map(
            (item) => new RegExp(`${item}`, "i")
          );
          const query = {
            title: { $all: regexList },
          };
          data = await RealEstate.find(query);
        }
        return res.status(200).json({ data });
      } catch (error) {
        return res.status(400).json({ success: false, error: "Bad request" });
      }

    default:
      return res.status(500).json({ success: false, error: "Server failed" });
  }
}

import cloudinary from "../../lib/cloudinaryConnect";

import middleware from "../../middlewares/middleware";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const files = req.files;
    // do stuff with files and body
    if (Array.isArray(req.files.images)) {
      const arrPathImages = files.images.map((item) => item.filepath);
      const dataImagePromises = arrPathImages.map((item) =>
        cloudinary.v2.uploader.upload(item)
      );
      const dataImages = await Promise.all(dataImagePromises);
      const data = dataImages.map((item) => ({
        image: item.secure_url,
        public_id: item.public_id,
      }));
      res.status(201).json({ data });
    } else {
      const pathImage = `${req.files.images.filepath}`;
      const data = await cloudinary.v2.uploader.upload(pathImage);
      res.status(200).json({
        data: [{ image: data.secure_url, public_id: data.public_id }],
      });
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ error });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

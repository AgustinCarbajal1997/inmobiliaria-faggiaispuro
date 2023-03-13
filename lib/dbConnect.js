import mongoose from "mongoose";
const URI_MONGO = process.env.URI_MONGO;

const mongoConnection = async () => {
  try {
    await mongoose.connect(URI_MONGO);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default mongoConnection;

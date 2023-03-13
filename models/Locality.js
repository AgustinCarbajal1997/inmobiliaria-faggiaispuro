import mongoose from "mongoose";

const localitySchema = new mongoose.Schema({
  locality: { type: String, index: true },
  zones: { type: Array },
});

localitySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    (returnedObject.id = returnedObject._id), delete returnedObject._id;
  },
});

const Locality =
  mongoose?.models?.locality || mongoose.model("locality", localitySchema);
export default Locality;

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  reason: { type: String },
  message: { type: String },
  reviewed: { type: Boolean, default: false },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

messageSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    (returnedObject.id = returnedObject._id), delete returnedObject._id;
  },
});

const Message =
  mongoose?.models?.message || mongoose.model("message", messageSchema);
export default Message;

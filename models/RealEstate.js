import mongoose from "mongoose";
const marked = require("marked");
const slugify = require("slugify");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

const realestateSchema = new mongoose.Schema({
  category: { type: String, index: true },
  title: { type: String, index: true },
  identifier: { type: String, index: true },
  condition: { type: String, index: true },
  locality: { type: String, index: true },
  neighborhood: { type: String, index: true },
  bedrooms: { type: Number, index: true },
  bathrooms: { type: Number, index: true },
  measures: { type: Number, index: true },
  garage: { type: Boolean, index: true },
  balcony: { type: Boolean, index: true },
  pool: { type: Boolean, index: true },
  barbecue: { type: Boolean, index: true },
  privateNeighborhood: { type: Boolean, index: true },
  backyard: { type: Boolean, index: true },
  grill: { type: Boolean, index: true },
  barter: { type: Boolean, index: true },
  alarm: { type: Boolean, index: true },
  sum: { type: Boolean, index: true },
  elevator: { type: Boolean, index: true },
  laundry: { type: Boolean, index: true },
  credit: { type: Boolean, index: true },
  services: { type: Boolean, index: true },
  locationHeader: String,
  location: String,
  imageFront: Array,
  images: Array,
  price: String,
  youtube: String,
  createdAt: {
    type: String,
    default: Date.now,
  },
  highlighted: { type: Boolean, index: true },
  description: String,
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  sanitizedHtml: {
    type: String,
  },
});

realestateSchema.pre("validate", function (next) {
  if (this.identifier) {
    this.slug = slugify(this.identifier + "-" + Date.now(), {
      lower: true,
      strict: true,
    });
  }

  if (this.description) {
    this.sanitizedHtml = dompurify.sanitize(marked.parse(this.description));
  }

  next();
});

realestateSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    (returnedObject.id = returnedObject._id), delete returnedObject._id;
  },
});

const RealEstate =
  mongoose?.models?.realestate ||
  mongoose.model("realestate", realestateSchema);
export default RealEstate;

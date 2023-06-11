import { Schema } from "mongoose";

const schema = new Schema({
  title: String,
  chosen: [String],
});

export { schema as addappSchema };

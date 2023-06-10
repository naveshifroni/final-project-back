import { Schema } from "mongoose";

const schema = new Schema({
  title: String,
  notifications: Boolean,
  inbox: Boolean,
  publish: Boolean,
  following: Boolean,
  followers: Boolean,
});

export { schema as appsetSchema };

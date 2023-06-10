import { model } from "mongoose";
import { appsetSchema } from "../schemas/appset.js";

const Appset = model("AppSettings", appsetSchema);

export { Appset };

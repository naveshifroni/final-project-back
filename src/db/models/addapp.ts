import { model } from "mongoose";
import { addappSchema } from "../schemas/addapp.js";

const Addapp = model("ChosenApps", addappSchema);

export { Addapp };

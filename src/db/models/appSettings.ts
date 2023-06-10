import { model } from "mongoose";
import { appSettingsSchema } from "../schemas/appSettings.js";

const AppSettings = model("AppSettings", appSettingsSchema);

export { AppSettings };

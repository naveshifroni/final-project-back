import cors from "cors";
import express from "express";
import morgan from "morgan";
import { connect } from "./db/connect.js";
import { notFound } from "./middleware/not-found.js";
import { appsetRouter } from "./routes/appSettings.js";
import { addappRouter } from "./routes/addapp.js";
import { authRouter } from "./routes/users.js";

const app = express();

//once app starts: connect to db: and fill the roles collection
connect().catch((e) => {
  console.log(e);
});

//middlewares:
app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(morgan("dev"));

//routes:

app.use("/api/app", appsetRouter);
app.use("/api/add", addappRouter);
app.use("/api/auth", authRouter);

//404:
app.use(notFound);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

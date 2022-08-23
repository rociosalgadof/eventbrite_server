import express from "express";
import cors from "cors";
import routes from "./routes/events.js";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

dotenv.config();

const app = express();

app.use(cors());

app.use("/", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serving from port: ${PORT}`);
});

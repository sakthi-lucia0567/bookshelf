import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { logger } from "./src/helpers/logger/logger.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//MIDDLEWARE for CORS
app.use(
  cors(
    {
      origin: "https://zoro-book-store.vercel.app",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type"],
      credentials: true,
    },
    {
      origin: "https://zoro-book-store-5vvunyeme-sakthivela-0567.vercel.app",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type"],
      credentials: true,
    }
  )
);

app.get("/", function (req, res) {
  logger.info("message received");
  res.send("Hello World");
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, logger.info(`app running in port ${PORT}`));

export default app;

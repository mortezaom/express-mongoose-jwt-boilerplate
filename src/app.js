import cors from "cors";
import 'dotenv/config';
import helmet from "helmet";
import express from "express";
import api from "./api/index.js";
import * as middlewares from "./middlewares.js";
import logger from "./logger.js";
import expressPino from 'pino-http';
import dbConnect from "./db.js";

const app = express();

dbConnect();
app.use(express.json());
app.use(expressPino({ logger }));
app.use(helmet());
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));

app.get("/", (req, res) => {
  res.send("👋🌎");
});

app.use("/api/v1", api);

app.use(middlewares.errorHandler);
app.use(middlewares.notFound);

export default app;
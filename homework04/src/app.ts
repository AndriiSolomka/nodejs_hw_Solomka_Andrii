"use strict";

import config from "config";
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import httpLogger from "./middleware/httpLogger";
import logger from "./utils/loger";
import { databaseService } from "./services/DatabaseService";
import userRouter from "./routes/userRouter";

const { log, warn, error } = logger("app");
const app = express();
const PORT = Number(config.get<string>("appPort"));
const HOSTNAME = config.get<string>("appHostname");

// Middleware for JSON parsing
app.use(express.json());

// Custom Middleware
app.use(httpLogger);

app.use("/api/v1", userRouter);
// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  error("Error:", err.message);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, HOSTNAME, () => {
  log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const handleShutdown = async (signal: string): Promise<void> => {
  log(`Received ${signal}. Closing MongoDB connection...`);
  await databaseService.disconnect();
  log(`${signal} handled. Exiting process.`);
  process.exit(0);
};

process.on("SIGINT", handleShutdown);
process.on("SIGTERM", handleShutdown);

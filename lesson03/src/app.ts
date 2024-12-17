import getLogger from "./utils/loger";
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import config from "./config/serverConfig";
import healthcheckRouter from "./routes/healthcheck";
import httpLogger from "./middleware/httpLogger";

const { log, warn } = getLogger("app");
const { PORT, HOSTNAME } = config;
const app = express();

app.use(express.json());
app.use(httpLogger);
app.use("/api", healthcheckRouter);

try {
  app.listen(PORT, HOSTNAME, () => {
    log(`Server is running on http://${HOSTNAME}:${PORT}`);
  });
} catch (error: any) {
  warn(error);
}

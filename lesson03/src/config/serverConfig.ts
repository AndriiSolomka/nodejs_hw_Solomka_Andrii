import dotenv from "dotenv";
import IConfig from "../interfaces/configInterface";

dotenv.config();

const config: IConfig = {
  PORT: process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000,
  HOSTNAME: process.env.APP_HOSTNAME || "localhost",
};

export default config;

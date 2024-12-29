import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import logger from "../utils/loger";
import "dotenv/config";
import config from "config";

const { log, error } = logger("db_services");

class DatabaseService {
  private uri: string;
  private dbName: string;
  private client: Mongoose;

  constructor(uri: string, dbName: string) {
    this.uri = uri;
    this.dbName = dbName;
  }

  async connect(): Promise<any> {
    try {
      this.client = await mongoose.connect(this.uri, { dbName: this.dbName });
      log("Connected to MongoDB");
      return this.client;
    } catch (err) {
      error("Failed to connect to MongoDB", err);
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.client.disconnect?.();
      log("Disconnected from MongoDB");
    } catch (err) {
      error("Failed to disconnect from MongoDB", err);
    }
  }
}

const databaseUrl = config.get<string>("databaseUrl");
const databaseName = config.get<string>("databaseName");

export const databaseService = new DatabaseService(databaseUrl, databaseName);
await databaseService.connect();

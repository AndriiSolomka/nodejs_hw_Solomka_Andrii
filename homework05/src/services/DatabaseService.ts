import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import logger from "../utils/loger";
import "dotenv/config";
import config from "config";

const { log, warn, error } = logger("db_services");

class DatabaseService {
  private uri: string;
  private dbName: string;
  private client: Mongoose;

  constructor(uri: string, dbName: string) {
    this.uri = uri;
    this.dbName = dbName;
  }

  async connect(): Promise<Mongoose> {
    try {
      this.client = await mongoose.connect(this.uri, { dbname: this.dbName });
      log("Connected to MongoDB");
      return this.client.db(this.dbName);
    } catch (err) {
      error("Failed to connect to MongoDB", err);
    }
  }

  async disconnect(): Promise<Db> {
    try {
      await this.client.close();
      log("Disconnected from MongoDB");
    } catch (err) {
      error("Failed to disconnect from MongoDB", err);
    }
  }
}

const databaseUrl = config.get<string>("databaseUrl");
const databaseName = config.get<string>("databaseName");

export const databaseService = new DatabaseService(databaseUrl, databaseName);
export const db = await databaseService.connect();

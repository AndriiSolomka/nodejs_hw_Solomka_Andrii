import { MongoClient, Db } from "mongodb";
import logger from "../utils/loger";
import "dotenv/config";
import config from "config";

const { log, warn, error } = logger("db_services");

class DatabaseService {
  private uri: string;
  private dbName: string;
  private client: MongoClient;

  constructor(uri: string, dbName: string) {
    this.uri = uri;
    this.dbName = dbName;
    this.client = new MongoClient(this.uri);
  }

  async connect(): Promise<Db> {
    try {
      await this.client.connect();
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

import "reflect-metadata";
import logger from "../utils/loger";
import { appDataSource } from "./appDataSource";
import { DataSource } from "typeorm";

const { log, error } = logger("db_services");

class DatabaseService {
  async connect(): Promise<DataSource> {
    try {
      await appDataSource.initialize();
      log("Connected to PostgresSQL");
      return appDataSource;
    } catch (err) {
      error("Failed to connect to  PostgresSQL", err);
    }
  }

  async disconnect(): Promise<void> {
    try {
      await appDataSource.destroy();
      log("Disconnected from PostgresSQL");
    } catch (err) {
      error("Failed to disconnect from PostgresSQL", err);
    }
  }
}

export const databaseService = new DatabaseService();
const db = await databaseService.connect();

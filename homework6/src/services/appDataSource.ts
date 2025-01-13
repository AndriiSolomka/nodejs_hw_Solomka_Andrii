import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  url: process.env["DATABASE_URL"],
  username: process.env["POSTGRES_USER"],
  password: process.env["POSTGRES_PASSWORD"],
  database: process.env["POSTGRES_DB"],
  synchronize: false,
  logging: true,
  entities: ["./src/entity/**/*.ts"],
  subscribers: [],
  migrations: ["./src/migrations/*.ts"],
});

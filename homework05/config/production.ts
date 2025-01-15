import "dotenv/config";

export default {
  appPort: process.env.APP_PORT || 3000,
  appHostname: process.env.APP_HOSTNAME || "localhost",
  databaseUrl: process.env.DATABASE_URL || "",
  databaseName: process.env.DATABASE_NAME || "",
};

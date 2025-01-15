import { createWriteStream } from "fs";

const writeStream = createWriteStream("src/logs/server.log", {
  flags: "a",
});

writeStream.on("error", (err: any): void => {
  console.error("Write File Error", err.message);
});
const writeFileLogger = (prefix: string, text: string): void => {
  const logMessage = `${prefix} ${text}\n`;
  writeStream.write(logMessage);
};

export default writeFileLogger;

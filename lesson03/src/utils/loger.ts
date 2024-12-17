"use strict";

import colors from "colors/safe";
import selectPrefixColor from "./selectPrefixColor";
import writeFileLogger from "./writeFileLogger";
import ILogger from "../interfaces/loggerInterface";

const createLogger = (prefix: string): ILogger => {
  return {
    log: (text: string) => {
      const logInfo = selectPrefixColor(prefix, colors.green);
      console.log(logInfo, text);
      writeFileLogger(logInfo, text);
    },

    warn: (text: string) => {
      const warnInfo = selectPrefixColor(prefix, colors.red);
      writeFileLogger(warnInfo, text);
      console.error(warnInfo, text);
    },
  };
};

export default createLogger;

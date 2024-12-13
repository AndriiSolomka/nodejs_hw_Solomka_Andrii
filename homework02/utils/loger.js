"use strict";
import colors from "colors/safe.js";
import formatPrefix from "./formatPrefix.js";

const createLogger = (prefix, isEnable) => {
  return {
    log: (text) => {
      console.log(formatPrefix(prefix, colors.green, isEnable), text);
    },

    warn: (text) => {
      console.error(formatPrefix(prefix, colors.red, isEnable), text);
    },
  };
};

export default createLogger;

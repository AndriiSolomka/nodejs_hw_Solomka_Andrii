"use strict";

import colors from "colors/safe.js";
import coloredPrefix from "./coloredPrefix.js";

const createLogger = (prefix) => {
  return {
    log: (text) => {
      console.log(coloredPrefix(prefix, colors.green), text);
    },

    warn: (text) => {
      console.error(coloredPrefix(prefix, colors.red), text);
    },
  };
};

export default createLogger;

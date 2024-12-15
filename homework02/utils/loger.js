"use strict";

import colors from "colors/safe.js";
import selectPrefixColor from "./selectPrefixColor.js";

const createLogger = (prefix) => {
  return {
    log: (text) => {
      console.log(selectPrefixColor(prefix, colors.green), text);
    },

    warn: (text) => {
      console.error(selectPrefixColor(prefix, colors.red), text);
    },
  };
};

export default createLogger;

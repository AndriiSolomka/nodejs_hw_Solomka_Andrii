"use strict";

const createLogger = (prefix) => {
  return {
    log: (text) => {
      console.log(`${prefix}:`, text);
    },

    warn: (text) => {
      console.error(`${prefix}:`, text);
    },
  };
};

module.exports = createLogger;

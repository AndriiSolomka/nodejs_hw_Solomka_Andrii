"use strict";

import colors from "colors/safe.js";
import "dotenv/config";

if (process.env.COLORS_ENABLED !== "true") {
  colors.disable();
}

const selectPrefixColor = (prefix, colorFn) => `${colorFn(prefix)}:`;

export default selectPrefixColor;

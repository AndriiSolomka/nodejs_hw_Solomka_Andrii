"use strict";

import colors from "colors/safe.js";

if (process.env.COLORS_ENABLED !== "true") {
  colors.disable();
}

const coloredPrefix = (prefix, colorFn) => `${colorFn(prefix)}:`;

export default coloredPrefix;

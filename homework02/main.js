"use strict";
import getLogger from "./utils/loger.js";
import "dotenv/config";

const isEnable = process.env.COLORS_ENABLED;
const logger = getLogger("main", isEnable);

logger.log("the script is running!");
logger.warn("error");

"use strict";
import getLogger from "./utils/loger.js";
import "dotenv/config";

const logger = getLogger("main");

logger.log("the script is running!");
logger.warn("error");

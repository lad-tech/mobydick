"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prefix = void 0;
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.errors({ stack: true }), winston_1.format.splat(), winston_1.format.json()),
    transports: [],
});
//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston_1.transports.Console({
        format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
    }));
}
exports.default = logger;
exports.Prefix = 'Checker';

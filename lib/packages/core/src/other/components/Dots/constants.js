"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WIDTH_LARGE = exports.WIDTH_MEDIUM = exports.WIDTH_SMALL = exports.MARGIN_DOT = exports.SIZE_SMALL = exports.SIZE_MEDIUM = exports.SIZE_LARGE = exports.SPAN_SIZE = void 0;
const px_1 = __importDefault(require("../../../styles/utils/px"));
exports.SPAN_SIZE = 3;
exports.SIZE_LARGE = (0, px_1.default)(8);
exports.SIZE_MEDIUM = (0, px_1.default)(6);
exports.SIZE_SMALL = (0, px_1.default)(4);
exports.MARGIN_DOT = (0, px_1.default)(5) * 2;
exports.WIDTH_SMALL = (exports.SIZE_LARGE + exports.MARGIN_DOT) * 3 +
    (exports.SIZE_MEDIUM + exports.MARGIN_DOT) +
    (exports.SIZE_SMALL + exports.MARGIN_DOT);
exports.WIDTH_MEDIUM = exports.WIDTH_SMALL + (exports.SIZE_MEDIUM + exports.MARGIN_DOT);
exports.WIDTH_LARGE = exports.WIDTH_MEDIUM + (exports.SIZE_SMALL + exports.MARGIN_DOT);

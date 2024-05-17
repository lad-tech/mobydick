"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const px_1 = __importDefault(require("../utils/px"));
const HIT_SLOP = {
    small: { top: (0, px_1.default)(10), bottom: (0, px_1.default)(10), left: (0, px_1.default)(10), right: (0, px_1.default)(10) },
    medium: { top: (0, px_1.default)(20), bottom: (0, px_1.default)(20), left: (0, px_1.default)(20), right: (0, px_1.default)(20) },
    large: { top: (0, px_1.default)(30), bottom: (0, px_1.default)(30), left: (0, px_1.default)(30), right: (0, px_1.default)(30) },
};
exports.default = HIT_SLOP;

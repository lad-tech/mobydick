"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedKeys_1 = __importDefault(require("./typedKeys"));
function mergeObjects(first, second, merger) {
    const ret = {};
    const keys = new Set((0, typedKeys_1.default)(first).concat((0, typedKeys_1.default)(second)));
    for (const key of keys) {
        ret[key] = merger(key, first, second);
    }
    return ret;
}
exports.default = mergeObjects;

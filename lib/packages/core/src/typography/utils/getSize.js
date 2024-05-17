"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSize = void 0;
const px_1 = __importDefault(require("../../styles/utils/px"));
const sizes = {
    H1: { fontSize: (0, px_1.default)(36), lineHeight: (0, px_1.default)(40) },
    H2: { fontSize: (0, px_1.default)(32), lineHeight: (0, px_1.default)(36) },
    H3: { fontSize: (0, px_1.default)(28), lineHeight: (0, px_1.default)(32) },
    H4: { fontSize: (0, px_1.default)(24), lineHeight: (0, px_1.default)(26) },
    H5: { fontSize: (0, px_1.default)(22), lineHeight: (0, px_1.default)(24) },
    XL: { fontSize: (0, px_1.default)(20), lineHeight: (0, px_1.default)(24) },
    L: { fontSize: (0, px_1.default)(18), lineHeight: (0, px_1.default)(22) },
    M: { fontSize: (0, px_1.default)(16), lineHeight: (0, px_1.default)(20) },
    S: { fontSize: (0, px_1.default)(15), lineHeight: (0, px_1.default)(19) },
    XS: { fontSize: (0, px_1.default)(14), lineHeight: (0, px_1.default)(18) },
    XXS: { fontSize: (0, px_1.default)(12), lineHeight: (0, px_1.default)(16) },
    XXXS: { fontSize: (0, px_1.default)(10), lineHeight: (0, px_1.default)(14) },
};
// eslint-disable-next-line import/prefer-default-export
const getSize = (size) => sizes[size];
exports.getSize = getSize;

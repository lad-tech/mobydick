"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useTheme_1 = __importDefault(require("./useTheme"));
const useStyles = (createStyleFn, ...args) => {
    const theme = (0, useTheme_1.default)();
    return [createStyleFn(theme, ...args), theme];
};
exports.default = useStyles;

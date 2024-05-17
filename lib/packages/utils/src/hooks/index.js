"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsForeground = exports.useToggle = exports.useLatest = exports.useDebounce = exports.useThrottle = void 0;
const useThrottle_1 = __importDefault(require("./useThrottle"));
exports.useThrottle = useThrottle_1.default;
const useDebounce_1 = __importDefault(require("./useDebounce"));
exports.useDebounce = useDebounce_1.default;
const useLatest_1 = __importDefault(require("./useLatest"));
exports.useLatest = useLatest_1.default;
const useToggle_1 = __importDefault(require("./useToggle"));
exports.useToggle = useToggle_1.default;
const useIsForeground_1 = __importDefault(require("./useIsForeground"));
exports.useIsForeground = useIsForeground_1.default;

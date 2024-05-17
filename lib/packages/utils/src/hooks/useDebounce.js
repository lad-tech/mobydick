"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useLatest_1 = __importDefault(require("./useLatest"));
const useDebounce = (callback, delay = 1000) => {
    const latestCallback = (0, useLatest_1.default)(callback);
    let timeout = (0, react_1.useRef)(null).current;
    const debouncedFn = (0, react_1.useMemo)(() => {
        return (...args) => {
            timeout && clearTimeout(timeout);
            timeout = setTimeout(() => {
                latestCallback.current(...args);
            }, delay);
        };
    }, []);
    (0, react_1.useEffect)(() => () => {
        timeout && clearTimeout(timeout);
    }, [debouncedFn]);
    return debouncedFn;
};
exports.default = useDebounce;

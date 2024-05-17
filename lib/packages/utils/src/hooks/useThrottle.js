"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useThrottle = (fn, time = 1000) => {
    const timeout = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        return () => {
            timeout.current && clearTimeout(timeout.current);
        };
    }, []);
    return {
        throttledFn: (...params) => {
            if (timeout.current) {
                return;
            }
            timeout.current = setTimeout(() => {
                timeout.current = null;
            }, time);
            fn(...params);
        },
    };
};
exports.default = useThrottle;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useLatest(value) {
    const valueRef = (0, react_1.useRef)(value);
    (0, react_1.useLayoutEffect)(() => {
        valueRef.current = value;
    }, [value]);
    return valueRef;
}
exports.default = useLatest;

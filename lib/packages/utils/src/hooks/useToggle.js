"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useToggle = (initialState = false) => {
    const [state, setState] = (0, react_1.useState)(initialState);
    const toggle = (0, react_1.useCallback)(() => setState(state => !state), []);
    return [state, toggle];
};
exports.default = useToggle;

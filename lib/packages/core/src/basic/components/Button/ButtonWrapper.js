"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const ButtonWrapper = (0, react_1.forwardRef)((props, ref) => {
    return <react_native_1.Button ref={ref} {...props}/>;
});
exports.default = ButtonWrapper;

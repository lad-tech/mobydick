"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FlatList = (0, react_1.forwardRef)((props, ref) => {
    return <react_native_1.FlatList ref={ref} {...props}/>;
});
exports.default = FlatList;

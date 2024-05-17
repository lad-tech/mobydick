"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const TouchableOpacity = (0, react_1.forwardRef)((props, ref) => <react_native_1.TouchableOpacity ref={ref} {...props}/>);
exports.default = TouchableOpacity;

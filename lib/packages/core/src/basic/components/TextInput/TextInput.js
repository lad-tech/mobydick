"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const config_1 = require("../../config");
const TextInput = (0, react_1.forwardRef)((props, ref) => (<react_native_1.TextInput ref={ref} allowFontScaling={(0, config_1.getConfig)().allowFontScaling} {...props}/>));
exports.default = TextInput;

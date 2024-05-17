"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const config_1 = require("../../config");
const Text = (0, react_1.forwardRef)((props, ref) => {
    return (<react_native_1.Text ref={ref} allowFontScaling={(0, config_1.getConfig)().allowFontScaling} {...props}/>);
});
exports.default = Text;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const useTheme_1 = __importDefault(require("../../../styles/hooks/useTheme"));
const types_1 = require("./types");
const Loader = props => {
    const { size, fill, ...otherProps } = props;
    const { colors } = (0, useTheme_1.default)();
    const getSize = (color) => {
        switch (size) {
            case types_1.ISizeSpinner.XXS:
                return (<styles_1.Loader fill={color} width="20" height="20" {...otherProps}/>);
            case types_1.ISizeSpinner.S:
                return (<styles_1.Loader fill={color} width="26" height="26" {...otherProps}/>);
            case types_1.ISizeSpinner.M:
                return (<styles_1.Loader fill={color} width="32" height="32" {...otherProps}/>);
            case types_1.ISizeSpinner.L:
                return (<styles_1.Loader fill={color} width="48" height="48" {...otherProps}/>);
            default:
                return (<styles_1.Loader fill={color} width="24" height="24" {...otherProps}/>);
        }
    };
    return getSize(fill || colors.ElementBase);
};
exports.default = Loader;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
const Text_1 = __importDefault(require("../../../basic/components/Text/Text"));
const hooks_1 = require("../../hooks");
const Typography = ({ children, font = 'Regular-Primary-S', style, ...props }) => {
    const { fontStyle } = (0, hooks_1.useFont)(font);
    return (<Text_1.default style={[fontStyle, style]} {...props}>
      {children}
    </Text_1.default>);
};
exports.Typography = Typography;

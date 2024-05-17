"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pressable_1 = __importDefault(require("../../basic/components/Pressable/Pressable"));
const View_1 = __importDefault(require("../../basic/components/View/View"));
const Circle = ({ outerStyle, innerStyle, selected = false, ...rest }) => {
    return (<Pressable_1.default style={outerStyle} {...rest}>
      {selected && <View_1.default style={innerStyle}/>}
    </Pressable_1.default>);
};
exports.default = Circle;

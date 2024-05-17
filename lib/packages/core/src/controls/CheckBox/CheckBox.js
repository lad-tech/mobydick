"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Control_1 = __importDefault(require("../Control"));
const constants_1 = __importDefault(require("../constants"));
const useStyles_1 = __importDefault(require("../../styles/hooks/useStyles"));
const Pressable_1 = __importDefault(require("../../basic/components/Pressable/Pressable"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const CheckBox = ({ children, ...rest }) => {
    const { disabled, selected, containerStyle, checkboxStyle, onPress, width, height, } = rest;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, { disabled, selected, width, height });
    return (<Pressable_1.default style={[styles.container, containerStyle]} onPress={onPress} disabled={disabled}>
      <Control_1.default type={constants_1.default.checkBox} style={[styles.checkbox, checkboxStyle]} {...rest}/>
      {children}
    </Pressable_1.default>);
};
exports.default = CheckBox;

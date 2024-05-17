"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Control_1 = __importDefault(require("../Control"));
const constants_1 = __importDefault(require("../constants"));
const useStyles_1 = __importDefault(require("../../styles/hooks/useStyles"));
const Pressable_1 = require("../../basic/components/Pressable");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const Radio = ({ selected = false, disabled = false, children, containerStyle, onPress, ...rest }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, selected, disabled);
    return (<Pressable_1.Pressable style={[styles.container, containerStyle]} needsOffscreenAlphaCompositing={true} disabled={disabled} onPress={onPress}>
      <Control_1.default disabled={disabled} type={constants_1.default.radio} selected={selected} outerStyle={styles.circle} innerStyle={styles.innerCircle} onPress={onPress} {...rest}/>
      {children}
    </Pressable_1.Pressable>);
};
exports.default = Radio;

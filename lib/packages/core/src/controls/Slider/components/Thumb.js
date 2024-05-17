"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const styles_1 = require("../../../styles");
const Thumb = ({ size }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate);
    return (<react_native_1.Animated.View style={[
            styles.root,
            {
                width: size,
                height: size,
                borderRadius: size,
            },
        ]}/>);
};
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }) => ({
    root: {
        borderWidth: spaces.Space2,
        borderColor: colors.IconMuted,
        backgroundColor: colors.BgPrimary,
    },
}));
exports.default = Thumb;

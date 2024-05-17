"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const ui_1 = require("@shared/ui");
const RenderSectionItem = ({ period, state, transition, index }) => {
    const [styles, { colors }] = (0, ui_1.useStyles)(createStyleFn);
    const animationStyles = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        const { current, next } = state.value;
        if (index !== current && index !== next) {
            return { backgroundColor: colors.BgAccent };
        }
        if (index === current && index === next) {
            return { backgroundColor: colors.BgAccentHard };
        }
        return {
            backgroundColor: (0, react_native_reanimated_1.interpolateColor)(transition.value, index === next ? [0, 1] : [1, 0], [colors.BgAccent, colors.BgAccentHard]),
        };
    });
    return (<react_native_reanimated_1.default.View style={[styles.container, animationStyles]}>
      <ui_1.Typography style={styles.text}>{period}</ui_1.Typography>
    </react_native_reanimated_1.default.View>);
};
const createStyleFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        flexGrow: 1,
        padding: spaces.Space8,
        borderRadius: spaces.Space16,
        margin: spaces.Space4,
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
}));
exports.default = RenderSectionItem;

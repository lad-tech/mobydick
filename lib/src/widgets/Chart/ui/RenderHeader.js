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
exports.AnimatedText = void 0;
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const react_native_1 = require("react-native");
const ui_1 = require("@shared/ui");
exports.AnimatedText = react_native_reanimated_1.default.createAnimatedComponent(react_native_1.TextInput);
react_native_reanimated_1.default.addWhitelistedNativeProps({ text: true });
const RenderHeader = ({ header }) => {
    const { fontStyle } = (0, ui_1.useFont)('Regular-Primary-XS');
    const animatedPropsPeriod = (0, react_native_reanimated_1.useAnimatedProps)(() => {
        return {
            text: header.selectedPeriodName.value,
            defaultValue: header.selectedPeriodName.value,
        };
    });
    const animatedPropsRecord = (0, react_native_reanimated_1.useAnimatedProps)(() => {
        const lastRecord = header.selectedValues.value[0]?.y.toString() ?? '';
        return {
            text: lastRecord,
            defaultValue: lastRecord,
        };
    });
    return (<ui_1.View>
      <exports.AnimatedText animatedProps={animatedPropsPeriod} editable={false} underlineColorAndroid="transparent" style={fontStyle}/>
      <ui_1.Typography>Last record</ui_1.Typography>
      <exports.AnimatedText animatedProps={animatedPropsRecord} editable={false} underlineColorAndroid="transparent" style={fontStyle}/>
    </ui_1.View>);
};
exports.default = RenderHeader;

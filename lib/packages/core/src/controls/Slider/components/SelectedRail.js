"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const stylesCreate_1 = __importDefault(require("../stylesCreate"));
const SelectedRail = ({ selectedRailStyle, }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    return (<react_native_1.Animated.View style={[styles.selectedRailContainer, selectedRailStyle]}>
      <View_1.default style={styles.selectedRail}/>
    </react_native_1.Animated.View>);
};
exports.default = SelectedRail;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const styles_1 = require("../../../styles");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const Dot = ({ active, size, activeDotColor, passiveDotColor, }) => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, size);
    const { colors } = (0, styles_1.useTheme)();
    const backgroundColor = (0, react_1.useMemo)(() => {
        return active
            ? activeDotColor || colors.ElementNeutral
            : passiveDotColor || colors.ElementMuted;
    }, [
        active,
        activeDotColor,
        colors.ElementMuted,
        colors.ElementNeutral,
        passiveDotColor,
    ]);
    return <View_1.default style={[styles.dot, { backgroundColor: backgroundColor }]}/>;
};
exports.default = Dot;

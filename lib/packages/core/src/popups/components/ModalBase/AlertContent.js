"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleIcon_1 = __importDefault(require("../../../styles/icons/font/SimpleIcon"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const useTheme_1 = __importDefault(require("../../../styles/hooks/useTheme"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const px_1 = __importDefault(require("../../../styles/utils/px"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const AlertContent = props => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    const { colors } = (0, useTheme_1.default)();
    const { name, color, size, style } = props;
    return (<View_1.default style={[styles.alertView, style]}>
      <SimpleIcon_1.default name={name || 'icon-check'} size={size || (0, px_1.default)(36)} color={color || colors.IconBase}/>
    </View_1.default>);
};
exports.default = AlertContent;

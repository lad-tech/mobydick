"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const icons_1 = require("../../../styles/icons");
const useTheme_1 = __importDefault(require("../../../styles/hooks/useTheme"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const typography_1 = require("../../../typography");
const InputSubtitle = (props) => {
    const { type, subtitle, subtitleIcon, subtitleProps } = props;
    const { colors, spaces } = (0, useTheme_1.default)();
    return (<View_1.default style={{ flexDirection: 'row', alignItems: 'center' }}>
      {subtitleIcon && (<icons_1.SimpleIcon name={subtitleIcon} size={spaces.Space16} color={type === types_1.IInputsTypes.wrong ? colors.TextError : colors.TextMuted} style={{ marginRight: spaces.Space4 }}/>)}
      <typography_1.Typography font={type === types_1.IInputsTypes.wrong
            ? 'Regular-Error-XXS'
            : 'Regular-Muted-XXS'} style={{ flex: 1 }} {...subtitleProps}>
        {subtitle}
      </typography_1.Typography>
    </View_1.default>);
};
exports.default = InputSubtitle;

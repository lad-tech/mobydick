"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const typography_1 = require("../../../typography");
const useTheme_1 = __importDefault(require("../../../styles/hooks/useTheme"));
const InputTitle = (props) => {
    const { title, titleProps, titleFont, titleStyle, required } = props;
    const { colors } = (0, useTheme_1.default)();
    const font = titleFont || titleProps?.font || 'Medium-Tertiary-XS';
    return (<View_1.default style={{ flexDirection: 'row' }}>
      <typography_1.Typography font={font} style={titleStyle} {...titleProps}>
        {title}
      </typography_1.Typography>
      {required && (<typography_1.Typography font={font} style={{ color: colors.TextError }}>
          {'*'}
        </typography_1.Typography>)}
    </View_1.default>);
};
exports.default = InputTitle;

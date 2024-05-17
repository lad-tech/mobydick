"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const utils_1 = require("../../utils");
const basic_1 = require("../../../basic");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const typography_1 = require("../../../typography");
const Spinner_1 = require("../../../progress/components/Spinner");
const types_1 = require("../../../progress/components/Spinner/types");
const other_1 = require("../../../other");
const Counter_1 = __importDefault(require("../../../other/components/Badge/Counter/Counter"));
const types_2 = require("./types");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const getDefaultFont_1 = require("./getDefaultFont");
const Button = (0, react_1.forwardRef)((props, ref) => {
    const { style, text, leftIcon, rightIcon, size = types_2.IButtonSize.fixed, type = types_2.IButtonTypes.primary, loading = false, disabled = false, textStyle, font, count, textProps, ...otherProps } = props;
    const [styles, theme] = (0, useStyles_1.default)(stylesCreate_1.default, disabled ? types_2.IButtonTypes.disabled : type, size, Boolean(leftIcon), Boolean(rightIcon), Boolean(text));
    const defaultFont = (0, getDefaultFont_1.getDefaultFont)(size, disabled ? types_2.IButtonTypes.disabled : type);
    const counterSize = size === types_2.IButtonSize.small ? other_1.ICounterSize.small : other_1.ICounterSize.medium;
    const Container = ({ children }) => (<basic_1.TouchableOpacity ref={ref} style={[styles.container, style]} disabled={loading ||
            disabled ||
            type === types_2.IButtonTypes.disabled ||
            type === types_2.IButtonTypes.loading} {...otherProps}>
      {children}
    </basic_1.TouchableOpacity>);
    const getSpinnerColor = () => {
        if (disabled) {
            return theme.colors.IconWhite;
        }
        switch (type) {
            case types_2.IButtonTypes.secondary:
            case types_2.IButtonTypes.tertiary:
                return theme.colors.IconBase;
            default:
                return theme.colors.IconWhite;
        }
    };
    if (loading || type === types_2.IButtonTypes.loading) {
        return (<Container>
        <Spinner_1.Spinner fill={getSpinnerColor()} size={size === types_2.IButtonSize.small ? types_1.ISizeSpinner.XXS : types_1.ISizeSpinner.XS}/>
      </Container>);
    }
    return (<Container>
      {leftIcon}
      {Boolean(text) && (<typography_1.Typography {...textProps} style={[styles.text, textStyle]} font={font || defaultFont}>
          {text}
        </typography_1.Typography>)}
      {rightIcon}
      {count ? (<Counter_1.default count={count} size={counterSize} type={(0, utils_1.getCounterType)(type)} style={styles.counter}/>) : null}
    </Container>);
});
exports.default = Button;

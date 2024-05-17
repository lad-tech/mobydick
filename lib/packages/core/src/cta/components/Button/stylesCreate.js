"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("../../../styles");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const types_1 = require("./types");
const getButtonHorizontalPadding = ({ theme, leftIcon, rightIcon, text, }) => {
    if (!text) {
        return theme.spaces.Space6;
    }
    if (leftIcon || rightIcon) {
        return (0, px_1.default)(14);
    }
    return theme.spaces.Space12;
};
const getButtonStyles = ({ theme, size, leftIcon, rightIcon, text, }) => {
    switch (size) {
        case types_1.IButtonSize.small:
            return {
                minHeight: theme.spaces.Space32,
                paddingVertical: theme.spaces.Space6,
                paddingHorizontal: getButtonHorizontalPadding({
                    theme,
                    leftIcon,
                    rightIcon,
                    text,
                }),
            };
        case types_1.IButtonSize.large:
            return {
                minHeight: theme.spaces.Space48,
                paddingVertical: theme.spaces.Space12,
                paddingHorizontal: text ? (0, px_1.default)(26) : theme.spaces.Space12,
            };
        case types_1.IButtonSize.fixed:
            return {
                alignSelf: 'stretch',
                minHeight: theme.spaces.Space48,
            };
        default:
            return {};
    }
};
const primaryStyle = ({ theme, size, leftIcon, rightIcon, text, }) => (0, styles_1.createStyles)(({ colors }) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.CtaBtnPrimary,
        borderRadius: theme.spaces.Space12,
        ...getButtonStyles({ theme, size, leftIcon, rightIcon, text }),
    },
    text: {
        paddingHorizontal: size === types_1.IButtonSize.small ? theme.spaces.Space4 : theme.spaces.Space6,
    },
    counter: {
        marginLeft: theme.spaces.Space2,
    },
}))(theme);
const secondaryStyle = ({ theme, size, leftIcon, rightIcon, text, }) => {
    const defaultStyles = primaryStyle({ theme, size, leftIcon, rightIcon, text });
    const { colors: { CtaBtnSecondary }, } = theme;
    defaultStyles.container.backgroundColor = CtaBtnSecondary;
    return defaultStyles;
};
const tertiaryStyle = ({ theme, size, leftIcon, rightIcon, text, }) => {
    const defaultStyles = primaryStyle({ theme, size, leftIcon, rightIcon, text });
    defaultStyles.container.backgroundColor = 'transparent';
    return defaultStyles;
};
const disabledStyle = ({ theme, size, leftIcon, rightIcon, text, }) => {
    const defaultStyles = primaryStyle({ theme, size, leftIcon, rightIcon, text });
    const { colors: { CtaBtnMuted }, } = theme;
    defaultStyles.container.backgroundColor = CtaBtnMuted;
    return defaultStyles;
};
const destructiveStyle = ({ theme, size, leftIcon, rightIcon, text, }) => {
    const defaultStyles = primaryStyle({ theme, size, leftIcon, rightIcon, text });
    const { colors: { CtaBtnDestructive }, } = theme;
    defaultStyles.container.backgroundColor = CtaBtnDestructive;
    return defaultStyles;
};
const stylesCreate = (theme, type, size, leftIcon, rightIcon, text) => {
    switch (type) {
        case types_1.IButtonTypes.secondary:
            return secondaryStyle({ theme, size, leftIcon, rightIcon, text });
        case types_1.IButtonTypes.tertiary:
            return tertiaryStyle({ theme, size, leftIcon, rightIcon, text });
        case types_1.IButtonTypes.disabled:
            return disabledStyle({ theme, size, leftIcon, rightIcon, text });
        case types_1.IButtonTypes.destructive:
            return destructiveStyle({ theme, size, leftIcon, rightIcon, text });
        case types_1.IButtonTypes.primary:
        default:
            return primaryStyle({ theme, size, leftIcon, rightIcon, text });
    }
};
exports.default = stylesCreate;

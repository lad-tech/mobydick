"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useStyles_1 = __importDefault(require("../../../../styles/hooks/useStyles"));
const basic_1 = require("../../../../basic");
const typography_1 = require("../../../../typography");
const TouchableOpacity_1 = require("../../../../basic/components/TouchableOpacity");
const SimpleIcon_1 = __importDefault(require("../../../../styles/icons/font/SimpleIcon"));
const createStyles_1 = __importDefault(require("../../../../styles/utils/createStyles"));
const Chip = ({ text, onPress, maxTextLength = DEFAULT_MAX_TEXT_LENGTH, }) => {
    const [styles, theme] = (0, useStyles_1.default)(styleSource);
    return (<basic_1.View style={styles.container}>
      <typography_1.Typography font="Regular-Accent-XXS" style={styles.text}>
        {getText(text, maxTextLength)}
      </typography_1.Typography>
      <TouchableOpacity_1.TouchableOpacity accessibilityLabel={text} onPress={onPress}>
        <SimpleIcon_1.default size={theme.spaces.Space16} color={theme.colors.TextAccent} name="icon-cancel"/>
      </TouchableOpacity_1.TouchableOpacity>
    </basic_1.View>);
};
const DEFAULT_MAX_TEXT_LENGTH = 15;
const getText = (text, maxTextLength) => {
    if (text.length <= maxTextLength) {
        return text;
    }
    return `${text.slice(0, maxTextLength)}...`;
};
const styleSource = (0, createStyles_1.default)(({ colors, spaces }) => ({
    container: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderRadius: spaces.Space8,
        padding: spaces.Space4,
        paddingLeft: spaces.Space8,
        backgroundColor: colors.BgAccentSoft,
    },
    text: {
        marginRight: spaces.Space4,
    },
}));
exports.default = Chip;

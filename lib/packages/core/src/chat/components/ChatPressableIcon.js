"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TouchableOpacity_1 = __importDefault(require("../../basic/components/TouchableOpacity/TouchableOpacity"));
const SimpleIcon_1 = __importDefault(require("../../styles/icons/font/SimpleIcon"));
const useStyles_1 = __importDefault(require("../../styles/hooks/useStyles"));
const useTheme_1 = __importDefault(require("../../styles/hooks/useTheme"));
const styles_1 = require("../../styles");
const px_1 = __importDefault(require("../../styles/utils/px"));
const ChatPressableIcon = (props) => {
    const { colors } = (0, useTheme_1.default)();
    const { name, color = colors.IconBase, backgroundColor = colors.BgAccent, ...otherProps } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate);
    return (<TouchableOpacity_1.default style={[styles.container, { backgroundColor: backgroundColor }]} {...otherProps}>
      <SimpleIcon_1.default name={name} color={color}/>
    </TouchableOpacity_1.default>);
};
const stylesCreate = (0, styles_1.createStyles)(({ spaces }) => ({
    container: {
        width: (0, px_1.default)(38),
        height: (0, px_1.default)(38),
        borderRadius: spaces.Space8,
        marginLeft: spaces.Space6,
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
exports.default = ChatPressableIcon;

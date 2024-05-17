"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const View_1 = __importDefault(require("../../basic/components/View/View"));
const styles_1 = require("../../styles");
const useStyles_1 = __importDefault(require("../../styles/hooks/useStyles"));
const ChatInputField_1 = __importDefault(require("./ChatInputField"));
const ChatPressableIcon_1 = __importDefault(require("./ChatPressableIcon"));
const ChatInput = props => {
    const { children, style, enabled = true, containerStyle } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate);
    const insets = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    return (<react_native_1.KeyboardAvoidingView style={[
            {
                marginBottom: insets.bottom,
            },
            style,
        ]} behavior={react_native_1.Platform.OS === 'ios' ? 'padding' : 'height'} enabled={enabled} keyboardVerticalOffset={0}>
      <View_1.default style={[styles.container, containerStyle]}>{children}</View_1.default>
    </react_native_1.KeyboardAvoidingView>);
};
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: colors.BgPrimary,
        width: '100%',
        paddingHorizontal: spaces.Space20,
        paddingVertical: spaces.Space16,
    },
}));
ChatInput.ChatInputField = ChatInputField_1.default;
ChatInput.ChatPressableIcon = ChatPressableIcon_1.default;
exports.default = ChatInput;

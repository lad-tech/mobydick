"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles_1 = require("../../styles");
const InputField_1 = __importDefault(require("../../inputs/components/InputField/InputField"));
const useStyles_1 = __importDefault(require("../../styles/hooks/useStyles"));
const other_1 = require("../../other");
const px_1 = __importDefault(require("../../styles/utils/px"));
const ChatInputField = (props) => {
    const { textInputContainerStyle, style, containerStyle, ...otherProps } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate);
    return (<InputField_1.default accessibilityLabel={other_1.LABELS.chatInputField} textInputContainerStyle={[styles.inputContainer, textInputContainerStyle]} multiline={true} style={[styles.textInput, style]} containerStyle={[styles.container, containerStyle]} {...otherProps}/>);
};
const stylesCreate = (0, styles_1.createStyles)(({ spaces }) => ({
    inputContainer: {
        minHeight: (0, px_1.default)(38),
        maxHeight: (0, px_1.default)(196),
        width: '100%',
        borderWidth: undefined,
        marginVertical: 0,
        alignItems: 'center',
        paddingVertical: react_native_1.Platform.select({
            android: spaces.Space4,
            ios: spaces.Space8,
        }),
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        minWidth: undefined,
        marginRight: spaces.Space2,
    },
    textInput: {
        paddingTop: 0,
    },
}));
exports.default = ChatInputField;

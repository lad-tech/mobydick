"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ChatInputField_1 = __importDefault(require("../ChatInputField"));
const other_1 = require("../../../other");
describe('@lad-tech/mobydick-core/ChatInputField', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatInputField_1.default placeholder={'placeholder'} value={'value'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly with props', () => {
        const { toJSON } = (0, react_native_1.render)(<ChatInputField_1.default placeholder={'placeholder'} value={'value'} textInputContainerStyle={{ width: 200 }} style={{ paddingTop: 20 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly focused/blur', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<ChatInputField_1.default />);
        const TextInput = getByLabelText(other_1.LABELS.chatInputField);
        (0, react_native_1.act)(() => TextInput.props.onFocus());
        expect(toJSON()).toMatchSnapshot();
        (0, react_native_1.act)(() => TextInput.props.onBlur());
        expect(toJSON()).toMatchSnapshot();
    });
});

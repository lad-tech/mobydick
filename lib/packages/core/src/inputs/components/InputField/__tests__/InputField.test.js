"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_native_2 = require("react-native");
const InputField_1 = __importDefault(require("../InputField"));
const constants_1 = __importDefault(require("../constants"));
const types_1 = require("../../types");
describe('@lad-tech/mobydick-core/InputField', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<InputField_1.default title={'title'} subtitle={'subtitle'} subtitleIcon={'icon-account'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly valid', () => {
        const { toJSON, getByTestId } = (0, react_native_1.render)(<InputField_1.default type={types_1.IInputsTypes.valid}/>);
        expect(toJSON()).toMatchSnapshot();
        const TextInput = getByTestId(constants_1.default.testID);
        (0, react_native_1.act)(() => TextInput.props.onFocus());
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly wrong', () => {
        const { toJSON, getByTestId } = (0, react_native_1.render)(<InputField_1.default type={types_1.IInputsTypes.wrong} subtitle={'subtitle'} subtitleIcon={'icon-account'}/>);
        expect(toJSON()).toMatchSnapshot();
        const TextInput = getByTestId(constants_1.default.testID);
        (0, react_native_1.act)(() => TextInput.props.onFocus());
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly disabled', () => {
        const { toJSON, getByTestId } = (0, react_native_1.render)(<InputField_1.default type={types_1.IInputsTypes.disabled} disabled={true}/>);
        expect(toJSON()).toMatchSnapshot();
        const TextInput = getByTestId(constants_1.default.testID);
        (0, react_native_1.act)(() => TextInput.props.onFocus());
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly focused/blur', () => {
        const { toJSON, getByTestId } = (0, react_native_1.render)(<InputField_1.default />);
        const TextInput = getByTestId(constants_1.default.testID);
        (0, react_native_1.act)(() => TextInput.props.onFocus());
        expect(toJSON()).toMatchSnapshot();
        (0, react_native_1.act)(() => TextInput.props.onBlur());
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly secureTextEntry', () => {
        react_native_2.Platform.OS = 'android';
        const { toJSON } = (0, react_native_1.render)(<InputField_1.default title={'title'} subtitle={'subtitle'} subtitleIcon={'icon-account'} secureTextEntry={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly multiline = true', () => {
        react_native_2.Platform.OS = 'android';
        const { toJSON } = (0, react_native_1.render)(<InputField_1.default title={'title'} multiline={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly multiline = false', () => {
        react_native_2.Platform.OS = 'android';
        const { toJSON } = (0, react_native_1.render)(<InputField_1.default title={'title'} multiline={false}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders title titleProps', () => {
        const { toJSON } = (0, react_native_1.render)(<InputField_1.default title={'title'} titleProps={{ font: 'Medium-Tertiary-S' }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

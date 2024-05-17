"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const CodeField_1 = __importDefault(require("../CodeField"));
const other_1 = require("../../../../other");
describe('@lad-tech/mobydick-core/CodeField', () => {
    test('render correctly with value focus', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<CodeField_1.default />);
        expect(toJSON()).toMatchSnapshot();
        const codeField = getByLabelText(other_1.LABELS.codeField);
        (0, react_native_1.act)(() => codeField.props.onFocus());
    });
    test('render correctly with value blur', () => {
        const onChangeText = jest.fn();
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<CodeField_1.default onBackKeyPress={() => console.log('onBackKeyPress')} onChangeText={onChangeText} fontStyleCodeField={'Regular-Primary-XL'}/>);
        const codeField = getByLabelText(other_1.LABELS.codeField);
        (0, react_native_1.act)(() => codeField.props.onBlur());
        expect(toJSON()).toMatchSnapshot();
        (0, react_native_1.act)(() => codeField.props.onKeyPress({ nativeEvent: { key: 'cancel' } }));
    });
    test('render correctly with value onKeyPress', () => {
        const onChangeText = jest.fn();
        const onBackKeyPress = jest.fn();
        const { getByLabelText } = (0, react_native_1.render)(<CodeField_1.default onBackKeyPress={onBackKeyPress} onChangeText={onChangeText}/>);
        const codeField = getByLabelText(other_1.LABELS.codeField);
        (0, react_native_1.act)(() => codeField.props.onKeyPress({ nativeEvent: { key: 'Backspace' } }));
        expect(onBackKeyPress).toHaveBeenCalled();
    });
});

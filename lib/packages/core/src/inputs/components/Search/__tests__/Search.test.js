"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Search_1 = __importDefault(require("../Search"));
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const other_1 = require("../../../../other");
describe('Search', () => {
    test('render correctly with value', () => {
        const onChangeText = jest.fn();
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Search_1.default value={'value'} onChangeText={onChangeText} leftIcon={<View_1.default />}/>);
        expect(toJSON()).toMatchSnapshot();
        const cancel = getByLabelText(other_1.LABELS.cancelSearch);
        react_native_1.fireEvent.press(cancel);
        expect(onChangeText).toHaveBeenCalledWith('');
    });
    test('render correctly without value', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Search_1.default />);
        expect(toJSON()).toMatchSnapshot();
        const log = jest.spyOn(console, 'log').mockImplementation(jest.fn);
        const search = getByLabelText(other_1.LABELS.search);
        react_native_1.fireEvent.changeText(search, 'search');
        expect(log).toHaveBeenCalledWith('Search says: "Add onChangeText (╯°□°)╯︵ ┻━┻". Current value=search');
    });
});

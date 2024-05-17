"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Chip_1 = __importDefault(require("../Chip"));
describe('@lad-tech/mobydick-core/Chip', () => {
    it('renders correctly and onPress fired', () => {
        const mockedOnPress = jest.fn();
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Chip_1.default text={'JavaScript'} onPress={mockedOnPress}/>);
        react_native_1.fireEvent.press(getByLabelText('JavaScript'));
        expect(mockedOnPress).toHaveBeenCalled();
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly with maxTextLength', () => {
        const { toJSON } = (0, react_native_1.render)(<Chip_1.default text={'JavaScript'} maxTextLength={4}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

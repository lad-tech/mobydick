"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const SimpleIconAlbum_1 = __importDefault(require("../SimpleIconAlbum"));
describe('@lad-tech/mobydick-core/icons/SimpleIconAlbum', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<SimpleIconAlbum_1.default onPress={() => console.log()}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly with color', () => {
        const { toJSON } = (0, react_native_1.render)(<SimpleIconAlbum_1.default color="#333" onPress={() => console.log()}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('renders correctly with press', () => {
        const onPress = jest.fn();
        const { getByTestId } = (0, react_native_1.render)(<SimpleIconAlbum_1.default color="#333" onPress={onPress}/>);
        const pressable = getByTestId('icon-image');
        react_native_1.fireEvent.press(pressable, { target: null, currentTarget: null });
        expect(onPress).toHaveBeenCalledWith('icon-image');
    });
});

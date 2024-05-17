"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ChipList_1 = __importDefault(require("../ChipList"));
describe('@lad-tech/mobydick-core/ChipList', () => {
    it('renders correctly and onChange fired', () => {
        const mockedOnChange = jest.fn();
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<ChipList_1.default selectedItem={[
                { label: 'JavaScript', value: 1 },
                { label: 'Rust', value: 2 },
            ]} onChange={mockedOnChange}/>);
        react_native_1.fireEvent.press(getByLabelText('Rust'));
        expect(mockedOnChange).toHaveBeenCalledWith({ label: 'Rust', value: 2 });
        expect(toJSON()).toMatchSnapshot();
    });
});

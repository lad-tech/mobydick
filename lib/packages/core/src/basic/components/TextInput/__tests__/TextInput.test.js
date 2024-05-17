"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const TextInput_1 = __importDefault(require("../TextInput"));
describe('@lad-tech/mobydick-core/TextInput', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<TextInput_1.default />);
        expect(toJSON()).toMatchSnapshot();
    });
});

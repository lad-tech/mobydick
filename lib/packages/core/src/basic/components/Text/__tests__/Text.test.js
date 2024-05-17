"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Text_1 = __importDefault(require("../Text"));
describe('@lad-tech/mobydick-core/Text', () => {
    it('renders correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<Text_1.default>Text</Text_1.default>);
        expect(toJSON()).toMatchSnapshot();
    });
});

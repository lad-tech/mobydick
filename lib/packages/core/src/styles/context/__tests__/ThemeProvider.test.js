"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const ThemeProvider_1 = __importDefault(require("../ThemeProvider"));
describe('ThemeProvider', () => {
    it('render correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<ThemeProvider_1.default />);
        expect(toJSON()).toMatchSnapshot();
    });
});

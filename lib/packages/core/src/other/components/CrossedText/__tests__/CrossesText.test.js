"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const CrossedText_1 = __importDefault(require("../CrossedText"));
describe('CrossedText', () => {
    test('render crossed text default', () => {
        const { toJSON } = (0, react_native_1.render)(<CrossedText_1.default lineColor={'#000'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render crossed text with lineHeight', () => {
        const { toJSON } = (0, react_native_1.render)(<CrossedText_1.default lineColor={'#000'} lineHeight={2}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

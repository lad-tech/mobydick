"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Counter_1 = __importDefault(require("../Counter"));
const types_1 = require("../types");
describe('Counter', () => {
    test('render counter', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default count={0}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render counter ICounterSize.medium', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default size={types_1.ICounterSize.medium} count={1}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render counter ICounterSize.small', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default size={types_1.ICounterSize.small} count={12}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render counter ICounterTypes.accentLight', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default type={types_1.ICounterTypes.accentLight} count={123}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render counter ICounterTypes.attentionLight', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default type={types_1.ICounterTypes.attentionLight} count={2}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render counter ICounterTypes.attention', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default type={types_1.ICounterTypes.attention} count={99} maxLength={1}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render counter ICounterTypes.accent', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default type={types_1.ICounterTypes.accent} count={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render counter ICounterTypes.mutedLight', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default type={types_1.ICounterTypes.mutedLight} count={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render counter ICounterTypes.muted', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default type={types_1.ICounterTypes.muted} count={10}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render counter style', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default style={{ backgroundColor: '#FFF' }} count={20}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render notification', () => {
        const { toJSON } = (0, react_native_1.render)(<Counter_1.default />);
        expect(toJSON()).toMatchSnapshot();
    });
});

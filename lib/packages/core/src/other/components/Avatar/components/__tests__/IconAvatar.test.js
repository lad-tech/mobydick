"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const IconAvatar_1 = __importDefault(require("../IconAvatar"));
const types_1 = require("../../types");
describe('IconAvatar', () => {
    test('render IconAvatar', () => {
        const { toJSON } = (0, react_native_1.render)(<IconAvatar_1.default size={types_1.IAvatarSize.S}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render IconAvatar size S', () => {
        const { toJSON } = (0, react_native_1.render)(<IconAvatar_1.default size={types_1.IAvatarSize.S}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render IconAvatar size M background', () => {
        const { toJSON } = (0, react_native_1.render)(<IconAvatar_1.default size={types_1.IAvatarSize.M}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render IconAvatar size L background', () => {
        const { toJSON } = (0, react_native_1.render)(<IconAvatar_1.default size={types_1.IAvatarSize.L}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render IconAvatar size XL background', () => {
        const { toJSON } = (0, react_native_1.render)(<IconAvatar_1.default size={types_1.IAvatarSize.XL}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

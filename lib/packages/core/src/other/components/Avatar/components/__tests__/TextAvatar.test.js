"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const types_1 = require("../../types");
const TextAvatar_1 = __importDefault(require("../TextAvatar"));
const userWithPhoto = {
    logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
    firstName: 'Иван',
    lastName: 'Пушкин',
};
describe('TextAvatar', () => {
    test('render TextAvatar', () => {
        const { toJSON } = (0, react_native_1.render)(<TextAvatar_1.default firstName={userWithPhoto.firstName} lastName={userWithPhoto.lastName} size={types_1.IAvatarSize.S}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render TextAvatar size S', () => {
        const { toJSON } = (0, react_native_1.render)(<TextAvatar_1.default firstName={userWithPhoto.firstName} size={types_1.IAvatarSize.S}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render TextAvatar size M', () => {
        const { toJSON } = (0, react_native_1.render)(<TextAvatar_1.default firstName={userWithPhoto.firstName} size={types_1.IAvatarSize.M}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render TextAvatar size L', () => {
        const { toJSON } = (0, react_native_1.render)(<TextAvatar_1.default firstName={userWithPhoto.firstName} size={types_1.IAvatarSize.L}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render TextAvatar size XL', () => {
        const { toJSON } = (0, react_native_1.render)(<TextAvatar_1.default firstName={userWithPhoto.firstName} size={types_1.IAvatarSize.XL}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

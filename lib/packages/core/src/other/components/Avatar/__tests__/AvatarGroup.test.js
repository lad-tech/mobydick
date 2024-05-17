"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const AvatarGroup_1 = __importDefault(require("../AvatarGroup"));
const types_1 = require("../types");
const defaultGroupDate = [
    {
        firstName: 'Иван',
        lastName: 'Пушкин',
    },
    {
        firstName: 'Иван',
        lastName: 'Пушкин',
    },
];
const smallGroupDate = [
    {
        logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
        firstName: 'Иван',
        lastName: 'Пушкин',
    },
    ...defaultGroupDate,
];
const defaultUser = [
    {
        firstName: 'Иван',
        lastName: 'Пушкин',
    },
];
describe('AvatarGroup', () => {
    test('render AvatarGroup < 3', () => {
        const { toJSON } = (0, react_native_1.render)(<AvatarGroup_1.default groups={defaultGroupDate} backgroundColor={'#ff0000'} type={types_1.IAvatarTypes.text}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render AvatarGroup', () => {
        const { toJSON } = (0, react_native_1.render)(<AvatarGroup_1.default groups={smallGroupDate.concat(Array(8).fill(defaultUser))}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render AvatarGroup = 4', () => {
        const { toJSON } = (0, react_native_1.render)(<AvatarGroup_1.default groups={defaultGroupDate.concat(defaultGroupDate)}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render AvatarGroup with props', () => {
        const { toJSON } = (0, react_native_1.render)(<AvatarGroup_1.default groups={smallGroupDate.concat(Array(101).fill(defaultUser))} backgroundColor={'#ff0000'} type={types_1.IAvatarTypes.text}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render AvatarGroup groupCount', () => {
        const { toJSON } = (0, react_native_1.render)(<AvatarGroup_1.default groups={smallGroupDate.concat(Array(101).fill(defaultUser))} backgroundColor={'#ff0000'} type={types_1.IAvatarTypes.text} groupCount={50}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

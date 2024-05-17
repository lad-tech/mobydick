"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Avatar_1 = __importDefault(require("../Avatar"));
const types_1 = require("../types");
const Badge_1 = require("../../Badge");
const constants_1 = require("../../../constants");
const userWithPhoto = {
    logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
    firstName: 'Иван',
    lastName: 'Пушкин',
};
const userWithPhotoError = {
    logo: 'https://vraki.net/',
    firstName: 'Иван',
    lastName: 'Пушкин',
};
const userWithoutPhoto = {
    firstName: 'Иван',
    lastName: 'Пушкин',
};
describe('Avatar', () => {
    test('render avatar with photo without size', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithPhoto}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar with photo S', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithPhoto} size={types_1.IAvatarSize.S} type={types_1.IAvatarTypes.icon}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar with photo L', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithPhoto} size={types_1.IAvatarSize.L}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar with photo XL', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithPhoto} size={types_1.IAvatarSize.XL} headers={{ test: `test token` }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar not photo', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithPhotoError} type={types_1.IAvatarTypes.icon}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar ITypeAvatar.icon', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithoutPhoto} type={types_1.IAvatarTypes.icon}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar ITypeAvatar.text', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Avatar_1.default user={userWithPhotoError} type={types_1.IAvatarTypes.text}/>);
        (0, react_native_1.fireEvent)(getByLabelText(constants_1.LABELS.imageAvatar), 'onError', { nativeEvent: {} });
        expect(toJSON()).toMatchSnapshot();
    });
    test('render without avatar border', () => {
        const userEmpty = null;
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userEmpty} border/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar badge indicator', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithoutPhoto} badge={{ type: types_1.IBadgeTypes.indicator, value: Badge_1.IIndicatorTypes.primary }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar badge counter', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithoutPhoto} badge={{
                type: types_1.IBadgeTypes.counter,
                value: Badge_1.ICounterTypes.attentionLight,
                count: 6,
            }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar badge status', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithoutPhoto} badge={{ type: types_1.IBadgeTypes.status, value: types_1.IStatusTypes.star }} disabled={false}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar badge null', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithoutPhoto} badge={{
                type: 'IBadgeTypes.status',
                value: types_1.IStatusTypes.star,
            }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar disabled', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={userWithoutPhoto} disabled={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar without firstName', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={{
                firstName: '',
                lastName: 'Пушкин',
            }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render avatar without firstName and lastName', () => {
        const { toJSON } = (0, react_native_1.render)(<Avatar_1.default user={{
                firstName: '',
                lastName: '',
            }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

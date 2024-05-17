"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Tabs_1 = __importDefault(require("../Tabs"));
describe('Tabs', () => {
    const list = [{ label: '1', value: 1 }];
    const onPress = () => null;
    test('render correctly', () => {
        const { toJSON } = (0, react_native_1.render)(<Tabs_1.default list={list} activeValue={'1'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render correctly with props', () => {
        const { toJSON } = (0, react_native_1.render)(<Tabs_1.default list={list} activeValue={'1'} onPressCommon={onPress} backgroundColorTab={'#000'} backgroundColorActiveTab={'#ff0000'} contentContainerStyle={{ flex: 1 }} containerStyle={{ flex: 2 }} fontTab={'Regular-Error-H3'} fontActiveTab={'Regular-White-H3'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Tab_1 = __importDefault(require("../Tab"));
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const other_1 = require("../../../../other");
describe('Tab', () => {
    const value = 1;
    const label = '1';
    test('render correctly with props', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Tab_1.default item={{
                label: label,
                value: value,
                onPress: () => null,
                leftIcon: <View_1.default />,
                rightIcon: <View_1.default />,
            }} active={true} backgroundColorTab={'#fff000'} fontTab={'Medium-Accent-H1'}/>);
        const tab = getByLabelText(other_1.LABELS.tab);
        react_native_1.fireEvent.press(tab);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render correctly active false', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Tab_1.default item={{
                label: label,
                value: value,
            }} active={false}/>);
        const tab = getByLabelText(other_1.LABELS.tab);
        react_native_1.fireEvent.press(tab);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render correctly active true', () => {
        const onPressCommon = jest.fn();
        const { getByLabelText } = (0, react_native_1.render)(<Tab_1.default item={{
                label: label,
                value: value,
            }} onPressCommon={onPressCommon} active={true}/>);
        const tab = getByLabelText(other_1.LABELS.tab);
        react_native_1.fireEvent.press(tab);
        expect(onPressCommon).toHaveBeenCalledWith({ label, value });
    });
});

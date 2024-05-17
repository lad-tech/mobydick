"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const index_1 = require("../index");
const SimpleIcon_1 = __importDefault(require("../../../../styles/icons/font/SimpleIcon"));
const other_1 = require("../../../../other");
describe('Tab', () => {
    test('render panelHeader', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.PanelHeader title={'title'} subtitle={'Subtitle'} containerStyle={{ backgroundColor: '#000' }} titleStyle={{ flex: 1 }} subtitleStyle={{ flex: 1 }} titleViewStyle={{ flex: 1 }} rightViewStyle={{ flex: 1 }} leftViewStyle={{ flex: 1 }} commonViewStyle={{ flex: 1 }} leftView={<SimpleIcon_1.default name={'icon-calendar'}/>} rightView={<SimpleIcon_1.default name={'icon-calendar'}/>} titleView={<></>} titleFont={'SemiBold-Secondary-L'} subtitleFont={'SemiBold-Secondary-M'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render panelHeader without props', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.PanelHeader />);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render panelHeader with title', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.PanelHeader title={'title'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render panelHeader with subtitle', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.PanelHeader subtitle={'Subtitle'}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render panelHeader only leftView', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<index_1.PanelHeader title={'title'} subtitle={'Subtitle'} containerStyle={{ backgroundColor: '#000' }} titleStyle={{ flex: 1 }} subtitleStyle={{ flex: 1 }} titleViewStyle={{ flex: 1 }} rightViewStyle={{ flex: 1 }} leftViewStyle={{ flex: 1 }} commonViewStyle={{ flex: 1 }} leftView={<SimpleIcon_1.default name={'icon-calendar'}/>} titleView={<></>} titleFont={'SemiBold-Secondary-L'} subtitleFont={'SemiBold-Secondary-M'}/>);
        const layout = getByLabelText(other_1.LABELS.panelHeaderLeftView);
        expect(toJSON()).toMatchSnapshot();
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(layout, 'layout', {
                nativeEvent: { layout: { width: 100 } },
            });
        });
    });
    test('render panelHeader only rightView', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<index_1.PanelHeader title={'title'} subtitle={'Subtitle'} containerStyle={{ backgroundColor: '#000' }} titleStyle={{ flex: 1 }} subtitleStyle={{ flex: 1 }} titleViewStyle={{ flex: 1 }} rightViewStyle={{ flex: 1 }} commonViewStyle={{ flex: 1 }} rightView={<SimpleIcon_1.default name={'icon-calendar'}/>} titleView={<></>} titleFont={'SemiBold-Secondary-L'} subtitleFont={'SemiBold-Secondary-M'}/>);
        const layout = getByLabelText(other_1.LABELS.panelHeaderRightView);
        expect(toJSON()).toMatchSnapshot();
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(layout, 'layout', {
                nativeEvent: { layout: { width: 100 } },
            });
        });
    });
    test('render panelHeader isSafeAreaView', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.PanelHeader title={'title'} subtitle={'Subtitle'} containerStyle={{ backgroundColor: '#000' }} titleStyle={{ flex: 1 }} subtitleStyle={{ flex: 1 }} titleViewStyle={{ flex: 1 }} rightViewStyle={{ flex: 1 }} leftViewStyle={{ flex: 1 }} commonViewStyle={{ flex: 1 }} leftView={<SimpleIcon_1.default name={'icon-calendar'}/>} rightView={<SimpleIcon_1.default name={'icon-calendar'}/>} titleView={<></>} titleFont={'SemiBold-Secondary-L'} subtitleFont={'SemiBold-Secondary-M'} isSafeAreaView={false}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render panelHeader edges', () => {
        const { toJSON } = (0, react_native_1.render)(<index_1.PanelHeader subtitle={'Subtitle'} edges={['left']}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

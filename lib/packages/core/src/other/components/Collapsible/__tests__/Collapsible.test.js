"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_native_2 = require("react-native");
const Collapsible_1 = __importDefault(require("../Collapsible"));
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const constants_1 = require("../../../constants");
describe('Collapsible', () => {
    test('render crossed onPress - 1', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Collapsible_1.default title={'title'} duration={1000} containerStyle={{ backgroundColor: 'red' }} headerStyle={{ backgroundColor: 'red' }} typeAnimation={'linear'} creationPropAnimation={'opacity'} fontTitle={'Regular-Black-S'} titleStyle={{ flex: 1 }} numberOfLines={1}>
        <>
          <View_1.default />
        </>
      </Collapsible_1.default>);
        const onPress = getByLabelText(constants_1.LABELS.collapsed);
        react_native_1.fireEvent.press(onPress);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render crossed onPress - 1 android', () => {
        react_native_2.Platform.OS = 'android';
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Collapsible_1.default title={'title'} duration={1000} titleBottomView={<View_1.default />}>
        <>
          <View_1.default />
        </>
      </Collapsible_1.default>);
        const onPress = getByLabelText(constants_1.LABELS.collapsed);
        react_native_1.fireEvent.press(onPress);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render crossed onPress - 2', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Collapsible_1.default title={'title'} initialState={true} isAnimated={false}>
        <>
          <View_1.default />
        </>
      </Collapsible_1.default>);
        const onPress = getByLabelText(constants_1.LABELS.collapsed);
        react_native_1.fireEvent.press(onPress);
        react_native_1.fireEvent.press(onPress);
        expect(toJSON()).toMatchSnapshot();
    });
});

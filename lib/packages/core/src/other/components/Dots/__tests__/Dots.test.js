"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Dots_1 = __importDefault(require("../Dots"));
const constants_1 = require("../../../constants");
describe('Dots', () => {
    test('render dots length > 7', () => {
        const { toJSON } = (0, react_native_1.render)(<Dots_1.default length={10} activeDot={0}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render dots length < 7', () => {
        const { toJSON } = (0, react_native_1.render)(<Dots_1.default length={6} activeDot={0}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render dots activeDot=2', () => {
        const { toJSON } = (0, react_native_1.render)(<Dots_1.default length={16} activeDot={2}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render dots activeDot=2 fixedSize', () => {
        const { toJSON } = (0, react_native_1.render)(<Dots_1.default length={5} activeDot={2} fixedSize={4} passiveDotColor={'black'} activeDotColor={'red'} dotsStyles={{ zIndex: 2 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render dots activeDot=10', () => {
        const { toJSON } = (0, react_native_1.render)(<Dots_1.default length={10} activeDot={9} animateAutoScroll={false}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render dots activeDot right', () => {
        const { toJSON, rerender } = (0, react_native_1.render)(<Dots_1.default length={10} activeDot={9}/>);
        expect(toJSON()).toMatchSnapshot();
        rerender(<Dots_1.default length={10} activeDot={2}/>);
        expect(toJSON()).toMatchSnapshot();
        rerender(<Dots_1.default length={10} activeDot={1}/>);
        expect(toJSON()).toMatchSnapshot();
        rerender(<Dots_1.default length={10} activeDot={0}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render dots activeDot left', () => {
        const { toJSON, rerender } = (0, react_native_1.render)(<Dots_1.default length={10} activeDot={3}/>);
        expect(toJSON()).toMatchSnapshot();
        rerender(<Dots_1.default length={10} activeDot={0}/>);
        expect(toJSON()).toMatchSnapshot();
        rerender(<Dots_1.default length={10} activeDot={1}/>);
        expect(toJSON()).toMatchSnapshot();
        rerender(<Dots_1.default length={10} activeDot={5}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render dots = 0', () => {
        const { toJSON } = (0, react_native_1.render)(<Dots_1.default length={0} activeDot={0}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render dots onLayout', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<Dots_1.default length={10} activeDot={0}/>);
        const layout = getByLabelText(constants_1.LABELS.dotsAnimatedView);
        expect(toJSON()).toMatchSnapshot();
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(layout, 'layout', {
                nativeEvent: { layout: { height: 100 } },
            });
        });
    });
    test('render dots activeDot=10 animateAutoScroll', () => {
        const { toJSON } = (0, react_native_1.render)(<Dots_1.default length={10} activeDot={9} animateAutoScroll={true}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

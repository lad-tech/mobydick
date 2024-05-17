"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Months_1 = __importDefault(require("../Months"));
const localeConfig_1 = require("../../localeConfig");
describe('Months', () => {
    it('render', () => {
        const onCloseMonths = jest.fn();
        const onPressMonth = jest.fn();
        const { toJSON } = (0, react_native_1.render)(<Months_1.default onCloseMonths={onCloseMonths} onPressMonth={onPressMonth} monthNamesShort={localeConfig_1.localeConfigRu.monthNamesShort}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press month', () => {
        const onCloseMonths = jest.fn();
        const onPressMonth = jest.fn();
        const { toJSON, getAllByLabelText } = (0, react_native_1.render)(<Months_1.default onCloseMonths={onCloseMonths} onPressMonth={onPressMonth} monthNamesShort={localeConfig_1.localeConfigRu.monthNamesShort}/>);
        const pressMonth = getAllByLabelText('pressMonth')[5];
        pressMonth && react_native_1.fireEvent.press(pressMonth);
        expect(toJSON()).toMatchSnapshot();
    });
});

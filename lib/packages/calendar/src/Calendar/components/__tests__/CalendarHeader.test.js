"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const CalendarHeader_1 = __importDefault(require("../CalendarHeader"));
describe('CalendarHeader', () => {
    it('render', () => {
        const onPressMonth = jest.fn();
        const onPressYear = jest.fn();
        const onPressRight = jest.fn();
        const onPressLeft = jest.fn();
        const { toJSON } = (0, react_native_1.render)(<CalendarHeader_1.default title={{
                currMonth: 'currMonth',
                currYear: 'currentYear',
            }} onPressMonth={onPressMonth} onPressYear={onPressYear} onPressRight={onPressRight} onPressLeft={onPressLeft}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

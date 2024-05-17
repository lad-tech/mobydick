"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Years_1 = __importDefault(require("../Years"));
const yearRange = [
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
    2021, 2022, 2023,
];
describe('Years', () => {
    it('render', () => {
        const onCloseYears = jest.fn();
        const onPressYear = jest.fn();
        const { toJSON } = (0, react_native_1.render)(<Years_1.default onCloseYears={onCloseYears} onPressYear={onPressYear} yearRange={yearRange}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('press year', () => {
        const onCloseYears = jest.fn();
        const onPressYear = jest.fn();
        const { toJSON, getAllByLabelText } = (0, react_native_1.render)(<Years_1.default onCloseYears={onCloseYears} onPressYear={onPressYear} yearRange={yearRange}/>);
        const pressYear = getAllByLabelText('pressYear')[2];
        pressYear && react_native_1.fireEvent.press(pressYear);
        expect(toJSON()).toMatchSnapshot();
    });
});

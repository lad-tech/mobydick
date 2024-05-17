"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const BadgeIndicator_1 = __importDefault(require("../BadgeIndicator"));
const types_1 = require("../types");
describe('BadgeIndicator', () => {
    test('render BadgeIndicator secondary', () => {
        const { toJSON } = (0, react_native_1.render)(<BadgeIndicator_1.default type={types_1.IIndicatorTypes.secondary}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    test('render BadgeIndicator primary', () => {
        const { toJSON } = (0, react_native_1.render)(<BadgeIndicator_1.default type={types_1.IIndicatorTypes.primary} style={{ top: 0 }}/>);
        expect(toJSON()).toMatchSnapshot();
    });
});

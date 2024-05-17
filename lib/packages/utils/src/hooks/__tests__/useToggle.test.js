"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const useToggle_1 = __importDefault(require("../useToggle"));
describe('useToggle', () => {
    test('positive case', () => {
        const { result: { current }, } = (0, react_hooks_1.renderHook)(() => (0, useToggle_1.default)(true));
        expect(current[0]).toEqual(true);
        (0, react_hooks_1.act)(() => current[1]());
    });
    test('case without initialState', () => {
        const { result: { current }, } = (0, react_hooks_1.renderHook)(() => (0, useToggle_1.default)());
        expect(current[0]).toEqual(false);
        (0, react_hooks_1.act)(() => current[1]());
    });
});

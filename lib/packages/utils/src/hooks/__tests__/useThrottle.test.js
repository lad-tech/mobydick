"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const useThrottle_1 = __importDefault(require("../useThrottle"));
describe('useThrottle', () => {
    jest.useFakeTimers();
    test('positive case with default delay', () => {
        const fn = jest.fn();
        const { result: { current }, } = (0, react_hooks_1.renderHook)(() => (0, useThrottle_1.default)(fn));
        for (let i = 0; i < 1 + Math.ceil(1000 / 60) * 4; i++) {
            (0, react_hooks_1.act)(current.throttledFn);
        }
        jest.runAllTimers();
        expect(fn).toHaveBeenCalledTimes(1);
    });
    test('positive case with custom delay', () => {
        const fn = jest.fn();
        const { result: { current }, } = (0, react_hooks_1.renderHook)(() => (0, useThrottle_1.default)(fn, 1));
        for (let i = 0; i < 1 + Math.ceil(1000 / 60) * 4; i++) {
            (0, react_hooks_1.act)(current.throttledFn);
        }
        expect(fn).toHaveBeenCalledTimes(1);
    });
});

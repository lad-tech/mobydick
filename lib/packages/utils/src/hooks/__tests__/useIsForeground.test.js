"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const react_native_1 = require("react-native");
const useIsForeground_1 = __importDefault(require("../useIsForeground"));
describe('useIsForeground', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    test('positive case', () => {
        const { result: { current }, } = (0, react_hooks_1.renderHook)(() => (0, useIsForeground_1.default)());
        expect(current).toBe(true);
    });
    test('negative case', () => {
        const appStateSpy = jest.spyOn(react_native_1.AppState, 'addEventListener');
        const { result } = (0, react_hooks_1.renderHook)(() => (0, useIsForeground_1.default)());
        const [firstCall] = appStateSpy.mock.calls;
        const [, cb] = firstCall;
        (0, react_hooks_1.act)(() => cb('inactive'));
        expect(result.current).toBe(false);
    });
});

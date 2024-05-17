"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const useTheme_1 = __importDefault(require("../useTheme"));
const context_1 = require("../../context/context");
describe('useTheme', () => {
    it('throw error when change without Provider', () => {
        const { result } = (0, react_hooks_1.renderHook)(() => (0, useTheme_1.default)());
        expect(result.current).toStrictEqual(context_1.defaultThemeContext);
        expect(result.current.setCurrentTheme).toThrow(context_1.MissingThemeProviderError);
        expect(result.current.setTheme).toThrow(context_1.MissingThemeProviderError);
    });
});

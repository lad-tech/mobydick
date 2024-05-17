"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const react_native_1 = require("react-native");
const useStyles_1 = __importDefault(require("../useStyles"));
const context_1 = require("../../context/context");
const styles = () => react_native_1.StyleSheet.create({ test: { flex: 1 } });
describe('useStyles', () => {
    it('render correctly', () => {
        const { result } = (0, react_hooks_1.renderHook)(() => (0, useStyles_1.default)(styles));
        expect(result.current).toStrictEqual([styles(), context_1.defaultThemeContext]);
    });
});

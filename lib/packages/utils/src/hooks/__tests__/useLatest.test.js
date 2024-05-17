"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const useLatest_1 = __importDefault(require("../useLatest"));
describe('useLatest', () => {
    test('positive case', () => {
        const fn = jest.fn();
        const { result: { current }, } = (0, react_hooks_1.renderHook)(() => (0, useLatest_1.default)(fn));
        (0, react_hooks_1.act)(current.current);
    });
});

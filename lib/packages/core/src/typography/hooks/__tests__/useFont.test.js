"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const useFont_1 = require("../useFont");
describe('useFont', () => {
    test('positive case default font', () => {
        const { result: { current }, } = (0, react_hooks_1.renderHook)(() => (0, useFont_1.useFont)());
        expect(current.fontStyle).toStrictEqual({
            color: '#20242D',
            fontFamily: 'Inter-Regular',
            fontSize: 22.5,
            lineHeight: 28.5,
            minHeight: 28.5,
        });
    });
    test('positive case custom font', () => {
        const { result: { current }, } = (0, react_hooks_1.renderHook)(() => (0, useFont_1.useFont)('Medium-Primary-S'));
        expect(current.fontStyle).toStrictEqual({
            color: '#20242D',
            fontFamily: 'Inter-Medium',
            fontSize: 22.5,
            lineHeight: 28.5,
            minHeight: 28.5,
        });
    });
});

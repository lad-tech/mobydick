"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const useNavigationTheme_1 = require("../useNavigationTheme");
describe('useNavigationTheme', () => {
    test('default', () => {
        const { result } = (0, react_native_1.renderHook)(() => (0, useNavigationTheme_1.useNavigationTheme)());
        expect(result).toStrictEqual({
            current: {
                colors: {
                    background: '#FFF',
                    border: 'rgba(32, 36, 45, 0.3)',
                    card: '#FFF',
                    notification: '#5E6678',
                    primary: '#20242D',
                    text: '#20242D',
                },
                dark: false,
            },
        });
    });
});

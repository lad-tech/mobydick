"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShadows = exports.shadowsAndroidDark = exports.shadowsAndroidLight = exports.shadowsIosDark = exports.shadowsIosLight = void 0;
const react_native_1 = require("react-native");
const shadowsIosLight = ({ spaces, }) => ({
    small: {
        shadowOffset: {
            width: 0,
            height: spaces.Space2,
        },
        shadowRadius: spaces.Space4,
        shadowOpacity: 0.16,
    },
    medium: {
        shadowOffset: {
            width: 0,
            height: spaces.Space6,
        },
        shadowRadius: spaces.Space8,
        shadowOpacity: 0.16,
    },
    large: {
        shadowOffset: {
            width: 0,
            height: spaces.Space12,
        },
        shadowRadius: spaces.Space16,
        shadowOpacity: 0.16,
    },
});
exports.shadowsIosLight = shadowsIosLight;
const shadowsIosDark = ({ spaces, }) => ({
    small: {
        shadowOffset: {
            width: 0,
            height: spaces.Space2,
        },
        shadowRadius: spaces.Space4,
        shadowOpacity: 0.48,
    },
    medium: {
        shadowOffset: {
            width: 0,
            height: spaces.Space6,
        },
        shadowRadius: spaces.Space8,
        shadowOpacity: 0.48,
    },
    large: {
        shadowOffset: {
            width: 0,
            height: spaces.Space12,
        },
        shadowRadius: spaces.Space16,
        shadowOpacity: 0.48,
    },
});
exports.shadowsIosDark = shadowsIosDark;
const shadowsAndroidLight = ({ spaces, }) => ({
    small: {
        elevation: spaces.Space1,
    },
    medium: {
        elevation: spaces.Space8,
    },
    large: {
        elevation: spaces.Space16,
    },
});
exports.shadowsAndroidLight = shadowsAndroidLight;
const shadowsAndroidDark = ({ spaces, }) => ({
    small: {
        elevation: spaces.Space4,
    },
    medium: {
        elevation: spaces.Space12,
    },
    large: {
        elevation: spaces.Space24,
    },
});
exports.shadowsAndroidDark = shadowsAndroidDark;
const getShadows = ({ spaces, currentTheme, }) => {
    const isDark = currentTheme === 'dark';
    if (react_native_1.Platform.OS === 'ios') {
        return isDark ? (0, exports.shadowsIosDark)({ spaces }) : (0, exports.shadowsIosLight)({ spaces });
    }
    if (react_native_1.Platform.OS === 'android') {
        return isDark
            ? (0, exports.shadowsAndroidDark)({ spaces })
            : (0, exports.shadowsAndroidLight)({ spaces });
    }
    return (0, exports.shadowsAndroidLight)({ spaces });
};
exports.getShadows = getShadows;

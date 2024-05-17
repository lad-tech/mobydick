"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = exports.defaultFonts = exports.CurrentTheme = void 0;
const getShadows_1 = require("../shadows/getShadows");
const defaultSpaces_1 = require("./defaultSpaces");
const colors_1 = require("./colors");
var CurrentTheme;
(function (CurrentTheme) {
    CurrentTheme["light"] = "light";
    CurrentTheme["dark"] = "dark";
})(CurrentTheme || (exports.CurrentTheme = CurrentTheme = {}));
exports.defaultFonts = {
    Regular: 'Inter-Regular',
    Medium: 'Inter-Medium',
    SemiBold: 'Inter-SemiBold',
    Bold: 'Inter-Bold',
    Italic: 'Inter-Italic',
    BoldItalic: 'Inter-BoldItalic',
};
exports.defaultTheme = {
    currentTheme: CurrentTheme.light,
    colors: {
        [CurrentTheme.light]: {
            ...colors_1.defaultTextLightColor,
            ...colors_1.defaultElementLightColor,
            ...colors_1.defaultIconLightColor,
            ...colors_1.defaultBgLightColor,
            ...colors_1.defaultCTALightColor,
            ...colors_1.defaultBorderLightColor,
            ...colors_1.defaultChartLightColor,
            ...colors_1.defaultCategoryLightColor,
            ...colors_1.defaultBannerLightColor,
        },
        [CurrentTheme.dark]: {
            ...colors_1.defaultTextDarkColor,
            ...colors_1.defaultElementDarkColor,
            ...colors_1.defaultIconDarkColor,
            ...colors_1.defaultBgDarkColor,
            ...colors_1.defaultCTADarkColor,
            ...colors_1.defaultBorderDarkColor,
            ...colors_1.defaultChartDarkColor,
            ...colors_1.defaultCategoryDarkColor,
            ...colors_1.defaultBannerDarkColor,
        },
    },
    spaces: {
        ...defaultSpaces_1.defaultSpaces,
    },
    fonts: exports.defaultFonts,
    shadows: (0, getShadows_1.getShadows)({
        spaces: defaultSpaces_1.defaultSpaces,
        currentTheme: CurrentTheme.light,
    }),
};

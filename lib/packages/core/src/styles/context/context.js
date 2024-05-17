"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultThemeContext = exports.missingFunc = exports.MissingThemeProviderError = void 0;
const react_1 = require("react");
const theme_1 = require("../constants/theme");
exports.MissingThemeProviderError = new Error('[@lad-tech/mobydick-core] useTheme hook was called outside of context, wrap your app with ThemeProvider component');
const missingFunc = () => {
    throw exports.MissingThemeProviderError;
};
exports.missingFunc = missingFunc;
exports.defaultThemeContext = {
    theme: theme_1.defaultTheme,
    spaces: theme_1.defaultTheme.spaces,
    colors: theme_1.defaultTheme.colors[theme_1.defaultTheme.currentTheme],
    currentTheme: theme_1.defaultTheme.currentTheme,
    fonts: theme_1.defaultFonts,
    shadows: theme_1.defaultTheme.shadows,
    setTheme: exports.missingFunc,
    setCurrentTheme: exports.missingFunc,
};
const ThemeContext = (0, react_1.createContext)(exports.defaultThemeContext);
ThemeContext.displayName = '@lad-tech/mobydick-core/ThemeContext';
exports.default = ThemeContext;

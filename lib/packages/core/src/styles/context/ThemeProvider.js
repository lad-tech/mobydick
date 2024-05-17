"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const theme_1 = require("../constants/theme");
const getShadows_1 = require("../shadows/getShadows");
const context_1 = __importDefault(require("./context"));
const ThemeProvider = ({ theme, currentTheme, children }) => {
    const [themeState, setThemeState] = (0, react_1.useState)(theme ?? theme_1.defaultTheme);
    const [currentThemeState, setCurrentThemeState] = (0, react_1.useState)(currentTheme ?? theme_1.defaultTheme.currentTheme);
    return (<context_1.default.Provider value={{
            theme: themeState,
            currentTheme: currentThemeState,
            colors: themeState.colors[currentThemeState], // I think no one don't be setting currentTheme to not keys of colors,
            spaces: themeState.spaces,
            fonts: themeState.fonts,
            shadows: (0, getShadows_1.getShadows)({
                spaces: themeState.spaces,
                currentTheme: currentThemeState,
            }),
            setTheme: setThemeState,
            setCurrentTheme: setCurrentThemeState,
        }}>
      {children}
    </context_1.default.Provider>);
};
exports.default = ThemeProvider;

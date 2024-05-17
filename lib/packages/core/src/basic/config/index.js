"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.setConfig = void 0;
let config = {
    allowFontScaling: true,
};
const setConfig = (newConfig) => {
    config = newConfig;
};
exports.setConfig = setConfig;
const getConfig = () => config;
exports.getConfig = getConfig;

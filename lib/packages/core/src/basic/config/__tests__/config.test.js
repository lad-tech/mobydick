"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('config', () => {
    test('setConfig and getConfig', () => {
        expect((0, index_1.getConfig)().allowFontScaling).toBe(true);
        (0, index_1.setConfig)({ allowFontScaling: true });
        expect((0, index_1.getConfig)().allowFontScaling).toBe(true);
        (0, index_1.setConfig)({ allowFontScaling: false });
        expect((0, index_1.getConfig)().allowFontScaling).toBe(false);
    });
});

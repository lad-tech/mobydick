"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const detox_1 = require("detox");
const const_1 = require("../../const");
const functions_1 = require("../../functions");
const typeTextField = (0, functions_1.getTypeTextField)();
const devicePlatform = (0, functions_1.getPlatform)();
describe('Button', () => {
    beforeAll(async () => {
        await detox_1.device.launchApp();
    });
    beforeEach(async () => {
        await detox_1.device.reloadReactNative();
    });
    it('should have basic button', async () => {
        await (0, detox_1.element)(detox_1.by.text(const_1.TEXTS.NAVIGATOR)).tap();
        await (0, detox_1.element)(detox_1.by.text('basic button')).tap();
        await (0, detox_1.element)(detox_1.by.text(const_1.TEXTS.PREVIEW)).tap();
        await (0, detox_1.expect)((0, detox_1.element)(detox_1.by.text('text big text'))).toBeVisible();
        await (0, detox_1.element)(detox_1.by.text(const_1.TEXTS.ADDONS)).tap();
        await (0, detox_1.element)(detox_1.by.text(const_1.TEXTS.KNOBS)).tap();
        if (devicePlatform === 'ios') {
            await (0, detox_1.element)(detox_1.by.type(typeTextField)).atIndex(4).tap();
            await (0, detox_1.element)(detox_1.by.text('large')).tap();
            await (0, detox_1.element)(detox_1.by.type(typeTextField)).atIndex(1).tap();
            await (0, detox_1.element)(detox_1.by.text('secondary')).tap();
            await (0, detox_1.element)(detox_1.by.type(typeTextField)).atIndex(2).clearText();
            await (0, detox_1.element)(detox_1.by.type(typeTextField))
                .atIndex(2)
                .replaceText('Добавить карту');
        }
        else {
            await (0, detox_1.element)(detox_1.by.text('size')).tap({ x: 5, y: 20 });
            await (0, detox_1.element)(detox_1.by.text('large')).tap();
            await (0, detox_1.element)(detox_1.by.text('type')).tap({ x: 5, y: 20 });
            await (0, detox_1.element)(detox_1.by.text('secondary')).tap();
            await (0, detox_1.element)(detox_1.by.text('disabled')).tap({ x: 5, y: 30 });
            await (0, detox_1.element)(detox_1.by.text('disabled')).tap({ x: 5, y: 30 });
            await (0, detox_1.element)(detox_1.by.type(typeTextField)).atIndex(1).clearText();
            await (0, detox_1.element)(detox_1.by.type(typeTextField))
                .atIndex(1)
                .replaceText('Добавить карту');
        }
        await (0, detox_1.element)(detox_1.by.text(const_1.TEXTS.PREVIEW)).tap();
        await (0, detox_1.element)(detox_1.by.text('light')).tap();
    });
});

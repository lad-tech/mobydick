"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeTextField = exports.getPlatform = void 0;
const detox_1 = require("detox");
const getPlatform = () => {
    return detox_1.device.getPlatform();
};
exports.getPlatform = getPlatform;
const getTypeTextField = () => {
    const device = (0, exports.getPlatform)();
    if (device === 'ios') {
        return 'RCTUITextField';
    }
    else {
        return 'android.widget.EditText';
    }
};
exports.getTypeTextField = getTypeTextField;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidMessageTime = void 0;
const isValidMessageTime = (time) => {
    const pattern = /^([01]\d|2[0-3]):[0-5]\d$/;
    return pattern.test(time);
};
exports.isValidMessageTime = isValidMessageTime;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidMessageTime_1 = require("../isValidMessageTime");
describe('@lad-tech/mobydick-core/Chat/isValidMessageTime', () => {
    it('08:11', () => {
        const res = (0, isValidMessageTime_1.isValidMessageTime)('08:11');
        expect(res).toBeTruthy();
    });
    it('00:00', () => {
        const res = (0, isValidMessageTime_1.isValidMessageTime)('00:00');
        expect(res).toBeTruthy();
    });
    it('11:11', () => {
        const res = (0, isValidMessageTime_1.isValidMessageTime)('11:11');
        expect(res).toBeTruthy();
    });
    it('23:59', () => {
        const res = (0, isValidMessageTime_1.isValidMessageTime)('23:59');
        expect(res).toBeTruthy();
    });
    it('test', () => {
        const res = (0, isValidMessageTime_1.isValidMessageTime)('test');
        expect(res).toBeFalsy();
    });
    it('88:11', () => {
        const res = (0, isValidMessageTime_1.isValidMessageTime)('88:11');
        expect(res).toBeFalsy();
    });
    it('00:61', () => {
        const res = (0, isValidMessageTime_1.isValidMessageTime)('00:61');
        expect(res).toBeFalsy();
    });
});

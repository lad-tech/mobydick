"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const rem_1 = __importDefault(require("../rem"));
describe('rem', () => {
    it('should correct ios', () => {
        react_native_1.Platform.OS = 'ios';
        const res = (0, rem_1.default)(10);
        expect(res).toEqual(15);
    });
    it('should correct android', () => {
        react_native_1.Platform.OS = 'android';
        const res = (0, rem_1.default)(10);
        expect(res).toEqual(15);
    });
    it('should correct horizontal', () => {
        react_native_1.Platform.OS = 'android';
        jest.spyOn(react_native_1.Dimensions, 'get').mockImplementation(() => ({
            width: 818,
            height: 414,
            scale: 1,
            fontScale: 1,
        }));
        const res = (0, rem_1.default)(10);
        expect(res).toEqual(11);
    });
});

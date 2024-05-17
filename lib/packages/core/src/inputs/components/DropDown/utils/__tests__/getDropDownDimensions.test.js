"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const getDropDownDimensions_1 = require("../getDropDownDimensions");
const px_1 = __importDefault(require("../../../../../styles/utils/px"));
describe('@lad-tech/mobydick-core/DropDownFunctions', () => {
    it('must return actual position list 8', () => {
        expect((0, getDropDownDimensions_1.getDropDownDimensions)({
            pageY: 300,
            dropDownHeight: 200,
            navBarHeight: 50,
            dropDownBorderWidth: 1,
            listLength: 1,
            height: 700,
        })).toEqual({
            underDropDownPos: 506,
            aboveDropDownPos: 700 - 300 + (0, px_1.default)(4),
            isAboveDropDown: false,
        });
    });
    it('must return actual position list 5', () => {
        expect((0, getDropDownDimensions_1.getDropDownDimensions)({
            pageY: 128,
            dropDownHeight: 40,
            navBarHeight: 50,
            dropDownBorderWidth: 1,
            listLength: 1,
            height: 700,
        })).toEqual({
            underDropDownPos: 174,
            aboveDropDownPos: 700 - 128 + (0, px_1.default)(4),
            isAboveDropDown: false,
        });
    });
    it('must return actual position list 5 Android', () => {
        react_native_1.Platform.OS = 'android';
        expect((0, getDropDownDimensions_1.getDropDownDimensions)({
            pageY: 128,
            dropDownHeight: 40,
            navBarHeight: 50,
            dropDownBorderWidth: 1,
            listLength: 1,
            height: 700,
        })).toEqual({
            underDropDownPos: 174,
            aboveDropDownPos: 700 - 128 + (0, px_1.default)(4),
            isAboveDropDown: false,
        });
    });
    it('must return actual position empty list', () => {
        expect((0, getDropDownDimensions_1.getDropDownDimensions)({
            pageY: 128,
            dropDownHeight: 40,
            navBarHeight: 50,
            dropDownBorderWidth: 1,
            listLength: 0,
            height: 700,
        })).toEqual({
            underDropDownPos: 174,
            aboveDropDownPos: 700 - 128 + (0, px_1.default)(4),
            isAboveDropDown: false,
        });
    });
});

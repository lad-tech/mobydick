"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getSelectedItems_1 = __importDefault(require("../getSelectedItems"));
describe('@lad-tech/mobydick-core/getSelectedItems', () => {
    const inputElement = { value: 1, label: 'JavaScript' };
    it('selectedItem is undefined', () => {
        expect((0, getSelectedItems_1.default)(undefined, inputElement)).toStrictEqual([
            inputElement,
        ]);
    });
    it('selectedItem is empty', () => {
        expect((0, getSelectedItems_1.default)([], inputElement)).toStrictEqual([inputElement]);
    });
    it('selectedItem is not contains inputElement', () => {
        const selectedItem = [
            { value: 2, label: 'PHP' },
            { value: 3, label: 'Rust' },
        ];
        expect((0, getSelectedItems_1.default)(selectedItem, inputElement)).toStrictEqual([
            ...selectedItem,
            inputElement,
        ]);
    });
    it('selectedItem already contains inputElement', () => {
        const selectedItem = [
            { value: 2, label: 'PHP' },
            { value: 3, label: 'Rust' },
        ];
        expect((0, getSelectedItems_1.default)([...selectedItem, inputElement], inputElement)).toStrictEqual(selectedItem);
    });
});

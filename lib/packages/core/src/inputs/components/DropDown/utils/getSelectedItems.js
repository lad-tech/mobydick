"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSelectedItems(selectedItems, item) {
    if (!selectedItems?.length) {
        return [item];
    }
    const itemAlreadyExist = selectedItems.some(({ value }) => value === item.value);
    if (itemAlreadyExist) {
        return selectedItems.filter(({ value }) => item.value !== value);
    }
    return [...selectedItems, item];
}
exports.default = getSelectedItems;

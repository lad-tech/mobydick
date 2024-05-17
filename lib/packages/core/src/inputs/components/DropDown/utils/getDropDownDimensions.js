"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDropDownDimensions = void 0;
const constants_1 = require("../constants");
const getDropDownDimensions = ({ pageY, navBarHeight, dropDownHeight, listLength, height, }) => {
    const listHeight = listLength >= 6 ? constants_1.LIST_MAX_HEIGHT : (constants_1.LIST_MAX_HEIGHT / 6) * listLength;
    const contentHeight = listLength ? listHeight : constants_1.EMPTY_LIST_HEIGHT;
    const underDropDownPos = pageY + dropDownHeight + constants_1.DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON;
    const aboveDropDownPos = height - pageY + constants_1.DEFAULT_DROPDOWN_MARGIN_FROM_BUTTON;
    const bottomScreenPos = dropDownHeight + contentHeight + pageY + navBarHeight;
    const isAboveDropDown = bottomScreenPos > height;
    return {
        underDropDownPos: underDropDownPos,
        aboveDropDownPos: aboveDropDownPos,
        isAboveDropDown: isAboveDropDown,
    };
};
exports.getDropDownDimensions = getDropDownDimensions;

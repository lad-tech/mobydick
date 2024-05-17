"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typography_1 = require("../../../../typography");
const types_1 = require("../types");
const getFont = (size) => {
    switch (size) {
        case types_1.IAvatarSize.S:
            return 'Regular-White-XXXS';
        case types_1.IAvatarSize.L:
            return 'Regular-White-L';
        case types_1.IAvatarSize.XL:
            return 'Regular-White-H5';
        case types_1.IAvatarSize.M:
        default:
            return 'Regular-White-XS';
    }
};
const TextAvatar = ({ firstName, lastName, size }) => {
    const firstLetter = firstName.slice(0, 1);
    const secondLetter = lastName?.slice(0, 1);
    const initials = secondLetter ? firstLetter + secondLetter : firstLetter;
    return <typography_1.Typography font={getFont(size)}>{initials}</typography_1.Typography>;
};
exports.default = TextAvatar;

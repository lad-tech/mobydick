"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const TextAvatar_1 = __importDefault(require("./TextAvatar"));
const IconAvatar_1 = __importDefault(require("./IconAvatar"));
const AvatarWithoutImage = props => {
    const { size, firstName, lastName, type } = props;
    const currType = type === types_1.IAvatarTypes.icon || (!firstName && !lastName)
        ? types_1.IAvatarTypes.icon
        : types_1.IAvatarTypes.text;
    switch (currType) {
        case types_1.IAvatarTypes.text:
            return (<TextAvatar_1.default firstName={firstName} lastName={lastName} size={size}/>);
        case types_1.IAvatarTypes.icon:
        default:
            return <IconAvatar_1.default size={size}/>;
    }
};
exports.default = AvatarWithoutImage;

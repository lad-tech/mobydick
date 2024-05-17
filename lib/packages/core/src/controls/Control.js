"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("./constants"));
const CheckSquare_1 = __importDefault(require("./CheckBox/CheckSquare"));
const Circle_1 = __importDefault(require("./Radio/Circle"));
const Control = ({ type, ...rest }) => {
    return type === constants_1.default.checkBox ? (<CheckSquare_1.default {...rest}/>) : (<Circle_1.default {...rest}/>);
};
exports.default = Control;

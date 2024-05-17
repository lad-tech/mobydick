"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../../cta/components/Button/types");
const Button_1 = __importDefault(require("../../../cta/components/Button/Button"));
const VerticalButton = props => {
    return <Button_1.default size={types_1.IButtonSize.fixed} {...props}/>;
};
exports.default = VerticalButton;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("../../../cta/components/Button/Button"));
const types_1 = require("../../../cta/components/Button/types");
const useTheme_1 = __importDefault(require("../../../styles/hooks/useTheme"));
const LeftButton = props => {
    const { spaces } = (0, useTheme_1.default)();
    return (<Button_1.default size={types_1.IButtonSize.small} style={{ alignSelf: 'flex-start', marginVertical: spaces.Space8 }} {...props}/>);
};
exports.default = LeftButton;

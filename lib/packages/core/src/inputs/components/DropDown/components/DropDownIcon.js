"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const SimpleIcon_1 = __importDefault(require("../../../../styles/icons/font/SimpleIcon"));
const useTheme_1 = __importDefault(require("../../../../styles/hooks/useTheme"));
const DropDownIcon = props => {
    const { isOpen, rightIcon } = props;
    const { colors } = (0, useTheme_1.default)();
    return rightIcon ? (<View_1.default style={isOpen && { transform: [{ rotateX: '180deg' }] }}>
      {rightIcon}
    </View_1.default>) : (<SimpleIcon_1.default name={'icon-arrow-down'} color={colors.IconMuted} style={isOpen ? { transform: [{ rotateX: '180deg' }] } : {}}/>);
};
exports.default = DropDownIcon;

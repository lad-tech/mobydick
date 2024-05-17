"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pressable_1 = require("../../basic/components/Pressable");
const icons_1 = require("../../styles/icons");
const useTheme_1 = __importDefault(require("../../styles/hooks/useTheme"));
const px_1 = __importDefault(require("../../styles/utils/px"));
const CheckSquare = ({ selected, ...rest }) => {
    const { colors } = (0, useTheme_1.default)();
    const width = rest.width || (0, px_1.default)(20);
    const height = rest.height || (0, px_1.default)(20);
    return (<Pressable_1.Pressable {...rest}>
      {selected ? (<icons_1.Check width={width} height={height} fill={rest.fill || colors.ElementBase}/>) : null}
    </Pressable_1.Pressable>);
};
exports.default = CheckSquare;

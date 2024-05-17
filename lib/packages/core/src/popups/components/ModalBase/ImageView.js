"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const ImageView = props => {
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    return (<View_1.default style={[styles.imageView, props.imageStyles]}>{props.image}</View_1.default>);
};
exports.default = ImageView;

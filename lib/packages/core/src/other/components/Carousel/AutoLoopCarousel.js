"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoopCarousel_1 = __importDefault(require("./LoopCarousel"));
const AutoLoopCarousel = ({ ...otherProps }) => {
    return <LoopCarousel_1.default isScrolling={true} {...otherProps}/>;
};
exports.default = AutoLoopCarousel;

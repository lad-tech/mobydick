"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carousel_1 = __importDefault(require("./Carousel"));
const AutoCarousel = ({ ...otherProps }) => {
    return (<Carousel_1.default showsHorizontalScrollIndicator={false} isScrolling={true} {...otherProps}/>);
};
exports.default = AutoCarousel;

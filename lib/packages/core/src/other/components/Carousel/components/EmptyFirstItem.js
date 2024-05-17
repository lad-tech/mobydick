"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const EmptyFirstItem = ({ align, width, }) => {
    return align === types_1.ICarouselAlign.center ? (<View_1.default style={{ width: width }}/>) : null;
};
exports.default = EmptyFirstItem;

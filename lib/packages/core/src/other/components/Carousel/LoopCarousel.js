"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const types_1 = require("./types");
const Carousel_1 = __importDefault(require("./Carousel"));
const LoopCarousel = ({ data, itemWidth, align = types_1.ICarouselAlign.start, ...otherProps }) => {
    const [infinityData, setInfinityData] = (0, react_1.useState)([...data, ...data, ...data]);
    const keyExtractorDefault = (0, react_1.useCallback)((item, index) => {
        return String(index) + String(item);
    }, []);
    const onEndReached = (0, react_1.useCallback)(() => setInfinityData([...infinityData, ...data]), [data, infinityData]);
    return (<Carousel_1.default data={infinityData} keyExtractor={keyExtractorDefault} itemWidth={itemWidth} onEndReached={onEndReached} initialNumToRender={data.length + 5} align={align} indexScroll={data.length} {...otherProps}/>);
};
exports.default = LoopCarousel;

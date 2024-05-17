"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const styles_1 = require("../../../../styles");
const LoopCarousel_1 = __importDefault(require("../LoopCarousel"));
const constants_1 = require("../../../constants");
const types_1 = require("../types");
const data = [
    { name: 'icon-starfill', id: '0' },
    { name: 'icon-starfill', id: '1' },
    { name: 'icon-starfill', id: '2' },
    { name: 'icon-starfill', id: '3' },
    { name: 'icon-starfill', id: '4' },
    { name: 'icon-starfill', id: '5' },
    { name: 'icon-starfill', id: '6' },
];
const sliderItem = (item) => <styles_1.SimpleIcon name={item.name}/>;
const itemWidth = 100;
describe('LoopCarousel', () => {
    it('render LoopCarousel sideMargin', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <LoopCarousel_1.default data={data} sliderItem={sliderItem} sideMargin={20} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render LoopCarousel onPressItem', () => {
        const onPressItem = jest.fn();
        const { getAllByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <LoopCarousel_1.default data={data} sliderItem={sliderItem} onPressItem={onPressItem} itemWidth={itemWidth} loading={false}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const onPressItemJSX = getAllByLabelText(constants_1.LABELS.carouselItem);
        onPressItemJSX[0] && react_native_1.fireEvent.press(onPressItemJSX[0]);
        expect(onPressItem).toHaveBeenCalledWith(data[0]);
    });
    it('render LoopCarousel onPressItem loading', () => {
        const { toJSON, getAllByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <LoopCarousel_1.default data={data} sliderItem={sliderItem} onPressItem={item => console.log(item)} itemWidth={itemWidth} loading={true}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const onPressItem = getAllByLabelText(constants_1.LABELS.carouselItem);
        onPressItem[0] && react_native_1.fireEvent.press(onPressItem[0]);
        onPressItem[0] && react_native_1.fireEvent.scroll(onPressItem[0]);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render LoopCarousel activeItemId', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <LoopCarousel_1.default data={data} sliderItem={sliderItem} activeItemId={'6'} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        expect(toJSON()).toMatchSnapshot();
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'layout', {
                nativeEvent: { layout: { height: 100 } },
            });
        });
    });
    it('render LoopCarousel initScroll isLoop', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <LoopCarousel_1.default data={data} sliderItem={sliderItem} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        expect(toJSON()).toMatchSnapshot();
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'layout', {
                nativeEvent: { layout: { height: 100 } },
            });
        });
    });
    it('render LoopCarousel initScroll isLoop align === center', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <LoopCarousel_1.default data={data} sliderItem={sliderItem} itemWidth={itemWidth} align={types_1.ICarouselAlign.center}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        expect(toJSON()).toMatchSnapshot();
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'layout', {
                nativeEvent: { layout: { height: 100 } },
            });
        });
    });
    it('render LoopCarousel contentOffset = 0', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <LoopCarousel_1.default data={data} sliderItem={sliderItem} activeItemId={'5'} itemWidth={itemWidth} align={types_1.ICarouselAlign.start}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.fireEvent)(carousel, 'onScroll', {
            nativeEvent: {
                contentSize: { height: 600, width: 500 },
                contentOffset: { x: 0, y: 0 },
                layoutMeasurement: { height: 100, width: 500 },
            },
        });
    });
    it('render LoopCarousel contentOffset = contentSize', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <LoopCarousel_1.default data={data} sliderItem={sliderItem} activeItemId={'5'} itemWidth={itemWidth} align={types_1.ICarouselAlign.start}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.fireEvent)(carousel, 'onScroll', {
            nativeEvent: {
                contentSize: { height: 600, width: 500 },
                contentOffset: { x: 100, y: 0 },
                layoutMeasurement: { height: 100, width: 500 },
            },
        });
    });
    it('render LoopCarousel not index isLoop', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <LoopCarousel_1.default data={data} sliderItem={sliderItem} onActiveChange={(item) => console.log('item', item)} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'onViewableItemsChanged', {
                viewableItems: [],
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
});

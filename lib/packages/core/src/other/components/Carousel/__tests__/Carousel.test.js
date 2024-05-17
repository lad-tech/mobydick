"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const Carousel_1 = __importDefault(require("../Carousel"));
const styles_1 = require("../../../../styles");
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
const keyExtractor = (item) => item.id;
const itemWidth = 100;
describe('Carousel', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });
    afterAll(() => {
        jest.useFakeTimers();
    });
    it('render Carousel', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel loading', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} loading={true} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel onScroll', () => {
        const { toJSON, getAllByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const onPressItem = getAllByLabelText(constants_1.LABELS.carouselItem);
        onPressItem[0] && react_native_1.fireEvent.press(onPressItem[0]);
        onPressItem[0] && react_native_1.fireEvent.scroll(onPressItem[0]);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel activeItemId', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} activeItemId={'6'} itemWidth={itemWidth} keyExtractor={keyExtractor}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'layout', {
                nativeEvent: { layout: { height: 100 } },
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel not activeItemId', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} activeItemId={'20'} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'layout', {
                nativeEvent: { layout: { height: 100 } },
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel averageItemLength', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} averageItemLength={6} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'onScrollToIndexFailed', {
                error: { index: 7 },
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel averageItemLength onScrollToIndexFailed', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} activeItemId={'20'} averageItemLength={20} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel onScrollToIndexFailed', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'onScrollToIndexFailed', {
                error: { index: 7 },
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel animateAutoScroll true', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} animateAutoScroll={true} itemWidth={itemWidth} align={types_1.ICarouselAlign.center}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel isDots', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} isDots={true} activeItemId={'5'} itemWidth={itemWidth} align={types_1.ICarouselAlign.start}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.fireEvent)(carousel, 'onScroll', {
            nativeEvent: {
                contentSize: { height: 600, width: 500 },
                contentOffset: { x: 150, y: 0 },
                layoutMeasurement: { height: 100, width: 500 },
            },
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel isDots with props', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} isDots={true} activeItemId={'1'} itemWidth={itemWidth} align={types_1.ICarouselAlign.start} dotSize={4} activeDotColor={'red'} passiveDotColor={'black'}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel onActiveChange', () => {
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} onActiveChange={(item) => console.log('item', item)} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel scroll', () => {
        const onActiveChange = jest.fn();
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} onActiveChange={onActiveChange} activeItemId={'3'} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'onViewableItemsChanged', {
                viewableItems: [
                    {
                        index: 7,
                        isViewable: true,
                        item: { name: 'icon-starfill', id: '7' },
                        key: '7',
                    },
                ],
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel scroll align = center', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} onActiveChange={(item) => console.log('item', item)} activeItemId={'3'} itemWidth={itemWidth} align={types_1.ICarouselAlign.center}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'onViewableItemsChanged', {
                viewableItems: [
                    {
                        index: 0,
                        isViewable: true,
                        item: { name: 'icon-starfill', id: '0' },
                        key: '0',
                    },
                ],
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel scroll align = center honest', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} onActiveChange={(item) => console.log('item', item)} activeItemId={'6'} itemWidth={itemWidth} align={types_1.ICarouselAlign.center}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'onViewableItemsChanged', {
                viewableItems: [
                    {
                        index: 0,
                        isViewable: true,
                        item: { name: 'icon-starfill', id: '0' },
                        key: '0',
                    },
                ],
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel scroll align = center honest count', () => {
        const onActiveChange = jest.fn();
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} onActiveChange={onActiveChange} activeItemId={'6'} itemWidth={250} align={types_1.ICarouselAlign.center}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'onViewableItemsChanged', {
                viewableItems: [
                    {
                        index: 5,
                        isViewable: true,
                        item: { name: 'icon-starfill', id: '5' },
                        key: '5',
                    },
                    {
                        index: 6,
                        isViewable: true,
                        item: { name: 'icon-starfill', id: '6' },
                        key: '6',
                    },
                ],
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel scroll align = center count', () => {
        const onActiveChange = jest.fn();
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} onActiveChange={onActiveChange} activeItemId={'5'} itemWidth={itemWidth} align={types_1.ICarouselAlign.center}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'onViewableItemsChanged', {
                viewableItems: [
                    {
                        index: 4,
                        isViewable: true,
                        item: { name: 'icon-starfill', id: '4' },
                        key: '4',
                    },
                    {
                        index: 5,
                        isViewable: true,
                        item: { name: 'icon-starfill', id: '5' },
                        key: '5',
                    },
                    {
                        index: 6,
                        isViewable: true,
                        item: { name: 'icon-starfill', id: '6' },
                        key: '6',
                    },
                ],
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel not scroll', () => {
        const onActiveChange = jest.fn();
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} onActiveChange={onActiveChange} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'onViewableItemsChanged', {
                viewableItems: [
                    {
                        index: 15,
                        isViewable: true,
                        item: { name: 'icon-starfill', id: '15' },
                        key: '15',
                    },
                ],
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel not index', () => {
        const { toJSON, getByLabelText } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} onActiveChange={(item) => console.log('item', item)} itemWidth={itemWidth}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        const carousel = getByLabelText(constants_1.LABELS.carousel);
        (0, react_native_1.act)(() => {
            (0, react_native_1.fireEvent)(carousel, 'onViewableItemsChanged', {
                viewableItems: [],
            });
        });
        expect(toJSON()).toMatchSnapshot();
    });
    it('render Carousel autoScroll', () => {
        jest.useFakeTimers();
        const { toJSON } = (0, react_native_1.render)(<react_native_safe_area_context_1.SafeAreaProvider>
        <Carousel_1.default data={data} sliderItem={sliderItem} keyExtractor={keyExtractor} itemWidth={itemWidth} isScrolling={true} ms={1000}/>
      </react_native_safe_area_context_1.SafeAreaProvider>);
        (0, react_native_1.act)(() => {
            jest.runOnlyPendingTimers();
        });
        expect(toJSON()).toMatchSnapshot();
    });
});

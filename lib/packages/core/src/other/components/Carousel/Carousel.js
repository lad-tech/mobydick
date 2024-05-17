"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const TouchableOpacity_1 = __importDefault(require("../../../basic/components/TouchableOpacity/TouchableOpacity"));
const constants_1 = require("../../constants");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const Dots_1 = __importDefault(require("../Dots/Dots"));
const isNumber_1 = require("../../functions/isNumber");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const types_1 = require("./types");
const Carousel = ({ data, sliderItem, keyExtractor, loading = false, sideMargin = (0, px_1.default)(10), itemWidth, onPressItem, activeItemId, averageItemLength, animateAutoScroll = false, isDots = false, onActiveChange, align = types_1.ICarouselAlign.start, onEndReached, initialNumToRender, isScrolling = false, ms = 2000, indexScroll, dotSize, activeDotColor, passiveDotColor, dotsStyles, ...otherProps }) => {
    const ref = (0, react_1.useRef)(null);
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, sideMargin);
    const [currIndex, setCurrIndex] = (0, react_1.useState)(0);
    const widthSnap = itemWidth + sideMargin * 2;
    const { width: WIDTH } = (0, react_native_safe_area_context_1.useSafeAreaFrame)();
    const viewabilityConfig = (0, react_1.useRef)({
        itemVisiblePercentThreshold: 80,
        waitForInteraction: true,
    }).current;
    const initScroll = (0, react_1.useCallback)(() => {
        const selectedIndex = indexScroll ||
            data.findIndex(item => keyExtractor(item) === activeItemId);
        if (selectedIndex > -1 && selectedIndex !== currIndex) {
            const widthData = widthSnap * selectedIndex;
            const emptySpace = WIDTH - widthSnap;
            setCurrIndex(selectedIndex);
            align === types_1.ICarouselAlign.center
                ? ref.current?.scrollToOffset({
                    offset: widthData - emptySpace / 2,
                    animated: false,
                })
                : ref.current?.scrollToIndex({
                    index: selectedIndex,
                    animated: false,
                });
        }
    }, [
        align,
        WIDTH,
        indexScroll,
        activeItemId,
        currIndex,
        data,
        keyExtractor,
        widthSnap,
    ]);
    const onPress = (0, react_1.useCallback)((item) => () => {
        !loading && onPressItem && onPressItem(item);
    }, [loading, onPressItem]);
    const renderItem = (0, react_1.useCallback)(({ item, index }) => {
        return (<TouchableOpacity_1.default onPress={onPress(item)} disabled={Boolean(!onPressItem || loading)} accessibilityLabel={constants_1.LABELS.carouselItem} style={styles.item}>
          {sliderItem(item, index, data)}
        </TouchableOpacity_1.default>);
    }, [data, onPress, onPressItem, loading, sliderItem]);
    const onScrollToIndexFailed = (0, react_1.useCallback)((error) => {
        if (averageItemLength) {
            ref.current?.scrollToOffset({
                offset: averageItemLength * error.index,
                animated: animateAutoScroll,
            });
        }
    }, [averageItemLength, animateAutoScroll]);
    const visibleElementsCount = Math.floor(WIDTH / widthSnap);
    const handleOnViewableItemsChanged = (0, react_1.useRef)(({ viewableItems }) => {
        if (align === types_1.ICarouselAlign.start) {
            const index = viewableItems[0]?.index;
            if ((0, isNumber_1.isNumber)(index)) {
                setCurrIndex(index);
            }
            typeof onActiveChange === 'function' &&
                viewableItems[0]?.item &&
                onActiveChange(viewableItems[0]?.item);
        }
        else {
            const length = viewableItems.length;
            const count = viewableItems[0]?.index === 0 ? length - 1 : length + 1;
            const currLength = visibleElementsCount > length ? count : length;
            const isEven = currLength % 2 === 0;
            const middleVisibleElement = isEven && viewableItems[0]?.index === 0
                ? Math.floor(currLength / 2) - 1
                : Math.floor(currLength / 2);
            const index = viewableItems[middleVisibleElement]?.index;
            if ((0, isNumber_1.isNumber)(index)) {
                setCurrIndex(index);
            }
            typeof onActiveChange === 'function' &&
                viewableItems[middleVisibleElement]?.item &&
                onActiveChange(viewableItems[middleVisibleElement]?.item);
        }
    }).current;
    (0, react_1.useEffect)(() => {
        if (!isScrolling) {
            return;
        }
        const timerAutoScroll = setInterval(() => {
            setCurrIndex(state => {
                ref.current?.scrollToIndex({
                    animated: true,
                    index: state + 1,
                });
                return state + 1;
            });
        }, ms);
        if (currIndex === data.length - 1) {
            clearInterval(timerAutoScroll);
        }
        return () => clearInterval(timerAutoScroll);
    }, [currIndex, data.length, isScrolling, ms]);
    const checkScroll = (0, react_1.useCallback)(({ contentOffset }, index) => {
        if (!contentOffset.x) {
            ref.current?.scrollToOffset({
                offset: widthSnap * index,
                animated: false,
            });
        }
    }, [widthSnap]);
    const onScroll = (0, react_1.useCallback)((event) => {
        indexScroll && checkScroll(event.nativeEvent, indexScroll);
    }, [indexScroll, checkScroll]);
    return (<>
      <react_native_1.FlatList ref={ref} data={data} extraData={loading} keyExtractor={keyExtractor} horizontal pagingEnabled onLayout={initScroll} accessibilityLabel={constants_1.LABELS.carousel} snapToAlignment={align} showsHorizontalScrollIndicator={false} renderItem={renderItem} onViewableItemsChanged={handleOnViewableItemsChanged} viewabilityConfig={viewabilityConfig} onScrollToIndexFailed={onScrollToIndexFailed} snapToInterval={widthSnap} decelerationRate={0} bounces={false} scrollEventThrottle={16} onScroll={onScroll} onEndReached={onEndReached} onEndReachedThreshold={0.5} removeClippedSubviews={true} initialNumToRender={initialNumToRender || 10} {...otherProps}/>
      {isDots && (<Dots_1.default length={data.length} activeDot={currIndex} animateAutoScroll={animateAutoScroll} fixedSize={dotSize} activeDotColor={activeDotColor} passiveDotColor={passiveDotColor} dotsStyles={dotsStyles}/>)}
    </>);
};
exports.default = Carousel;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const constants_1 = require("../../constants");
const Dot_1 = __importDefault(require("./Dot"));
const constants_2 = require("./constants");
function getDirection(newIdx, prevIdx) {
    if (newIdx === prevIdx) {
        return 0;
    }
    return newIdx < prevIdx ? -1 : 1;
}
const Dots = ({ length, activeDot, animateAutoScroll = true, fixedSize, activeDotColor, passiveDotColor, dotsStyles, }) => {
    const refScrollView = (0, react_1.useRef)(null);
    const dots = [...Array(length).keys()];
    const [prevIndex, setPrevIndex] = (0, react_1.useState)(activeDot - 1);
    const direction = (0, react_1.useRef)(getDirection(activeDot, prevIndex));
    const half = Math.floor((constants_2.SPAN_SIZE - 1) / 2);
    const isFirstHalf = activeDot < Math.floor(length / 2);
    const isDynamicDots = length < 7;
    const numConsumed = isFirstHalf
        ? Math.max(activeDot - half, 0)
        : Math.min(activeDot + half, length - 1) - activeDot;
    const i = (0, react_1.useRef)(isFirstHalf
        ? activeDot - numConsumed
        : activeDot - (constants_2.SPAN_SIZE - 1 - numConsumed));
    const j = (0, react_1.useRef)(isFirstHalf
        ? activeDot + (constants_2.SPAN_SIZE - 1 - numConsumed)
        : activeDot + numConsumed);
    const isMiddleDotActive = activeDot !== i.current + 1;
    function updateIndexes(currentDirection, currentIndex) {
        if (currentDirection === -1) {
            i.current = Math.min(currentIndex, i.current);
            j.current = Math.min(i.current + (constants_2.SPAN_SIZE - 1), j.current);
        }
        else if (currentDirection === 1) {
            j.current = Math.max(currentIndex, j.current);
            i.current = Math.max(j.current - (constants_2.SPAN_SIZE - 1), i.current);
        }
    }
    function setIndexes() {
        direction.current = getDirection(activeDot, prevIndex);
        updateIndexes(direction.current, activeDot);
        setPrevIndex(activeDot);
    }
    const scrollTo = (index) => {
        if (!refScrollView.current) {
            return;
        }
        setIndexes();
        const indicatorRight = () => {
            if (index > constants_2.SPAN_SIZE) {
                return index - 4;
            }
            else {
                return index - 3;
            }
        };
        const moveTo = Math.max(0, (direction.current > 0 ? indicatorRight() : index - 1) *
            (constants_2.SIZE_SMALL + constants_2.MARGIN_DOT));
        const isScrollTo = prevIndex !== i.current && prevIndex !== j.current;
        isScrollTo &&
            refScrollView.current.scrollTo({
                x: moveTo,
                y: 0,
                animated: animateAutoScroll,
            });
    };
    (0, react_1.useEffect)(() => {
        isDynamicDots ? setIndexes() : isMiddleDotActive && scrollTo(activeDot);
    }, [activeDot, isDynamicDots, isMiddleDotActive]);
    const size = (0, react_1.useCallback)((k) => {
        const left = i.current;
        const right = j.current;
        if (k >= left && k <= right) {
            return constants_2.SIZE_LARGE;
        }
        if (k === left - 1 && left - 1 >= 0) {
            return constants_2.SIZE_MEDIUM;
        }
        if (k === right + 1 && right + 1 < length) {
            return constants_2.SIZE_MEDIUM;
        }
        return constants_2.SIZE_SMALL;
    }, [activeDot]);
    const renderDot = () => {
        return dots.map(dot => (<Dot_1.default key={dot} active={dot === activeDot} size={isDynamicDots ? fixedSize || size(dot) : size(dot)} activeDotColor={activeDotColor} passiveDotColor={passiveDotColor}/>));
    };
    const onLayout = (0, react_1.useCallback)(() => {
        //scroll to right index on initial render
        scrollTo(activeDot);
    }, [activeDot]);
    const width = (0, react_1.useMemo)(() => {
        return isDynamicDots
            ? (fixedSize && (fixedSize + constants_2.MARGIN_DOT) * 8) || constants_2.WIDTH_MEDIUM
            : constants_2.WIDTH_MEDIUM;
    }, [fixedSize, isDynamicDots]);
    if (isDynamicDots) {
        return (<View_1.default style={[
                {
                    alignItems: 'center',
                    flexDirection: 'row',
                },
                dotsStyles,
            ]}>
        {renderDot()}
      </View_1.default>);
    }
    return (<react_native_1.Animated.View style={[
            {
                width: width,
            },
            dotsStyles,
        ]} onLayout={onLayout} accessibilityLabel={constants_1.LABELS.dotsAnimatedView}>
      <react_native_1.ScrollView ref={refScrollView} contentContainerStyle={{
            alignItems: 'center',
        }} bounces={false} scrollEnabled={false} horizontal accessibilityLabel={constants_1.LABELS.dotsScrollView} showsHorizontalScrollIndicator={false}>
        {renderDot()}
      </react_native_1.ScrollView>
    </react_native_1.Animated.View>);
};
exports.default = Dots;

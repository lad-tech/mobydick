"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const react_native_1 = require("react-native");
const utils_1 = require("./utils");
const DragAndDrop = ({ children, positions, id, scrollY, scrollView, columns, itemWidth, itemHeight, heightScrollView, }) => {
    const position = (0, utils_1.getPosition)({
        index: positions.value[id],
        col: columns,
        height: itemHeight,
        width: itemWidth,
    });
    const x = (0, react_native_reanimated_1.useSharedValue)(position.x);
    const y = (0, react_native_reanimated_1.useSharedValue)(position.y);
    const isGestureActive = (0, react_native_reanimated_1.useSharedValue)(false);
    const containerHeight = heightScrollView;
    const contentHeight = Math.ceil(Object.keys(positions.value).length / columns) * itemHeight;
    (0, react_native_reanimated_1.useAnimatedReaction)(() => positions.value[id], newOrder => {
        const newPositions = (0, utils_1.getPosition)({
            index: newOrder,
            col: columns,
            height: itemHeight,
            width: itemWidth,
        });
        x.value = (0, react_native_reanimated_1.withTiming)(newPositions.x, utils_1.animationConfig);
        y.value = (0, react_native_reanimated_1.withTiming)(newPositions.y, utils_1.animationConfig);
    });
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        const zIndex = isGestureActive.value ? 1 : 0;
        const scale = isGestureActive.value ? 1.1 : 1;
        return {
            position: 'absolute',
            top: 0,
            left: 0,
            width: itemWidth,
            height: itemHeight,
            zIndex,
            transform: [{ translateX: x.value }, { translateY: y.value }, { scale }],
        };
    });
    const pan = react_native_gesture_handler_1.Gesture.Pan()
        .onStart(event => {
        x.value = x.value + event.translationX;
        y.value = y.value + event.translationY;
        isGestureActive.value = true;
    })
        .onChange(event => {
        x.value = x.value + event.changeX;
        y.value = y.value + event.changeY;
        // 1. We calculate where the tile should be
        const newOrder = (0, utils_1.getOrder)({
            tx: x.value,
            ty: y.value,
            max: Object.keys(positions.value).length - 1,
            col: columns,
            width: itemWidth,
            height: itemHeight,
        });
        // 2. We swap the positions
        const oldOrder = positions.value[id];
        if (newOrder !== oldOrder) {
            const idToSwap = Object.keys(positions.value).find(key => positions.value[key] === newOrder);
            if (idToSwap) {
                // Spread operator is not supported in worklets
                // And Object.assign doesn't seem to be working on alpha.6
                const newPositions = JSON.parse(JSON.stringify(positions.value));
                newPositions[id] = newOrder;
                newPositions[idToSwap] = oldOrder;
                positions.value = newPositions;
            }
        }
        // 3. Scroll
        const lowerBound = scrollY.value;
        const upperBound = lowerBound + containerHeight - itemHeight;
        const maxScroll = contentHeight - containerHeight;
        const leftToScrollDown = maxScroll - scrollY.value;
        if (y.value < lowerBound) {
            const diff = Math.min(lowerBound - y.value, lowerBound);
            scrollY.value -= diff;
            y.value -= diff;
            (0, react_native_reanimated_1.scrollTo)(scrollView, 0, scrollY.value, false);
        }
        if (y.value > upperBound) {
            const diff = Math.min(y.value - upperBound, leftToScrollDown);
            scrollY.value += diff;
            y.value += diff;
            (0, react_native_reanimated_1.scrollTo)(scrollView, 0, scrollY.value, false);
        }
    })
        .onEnd(_ => {
        const destination = (0, utils_1.getPosition)({
            index: positions.value[id],
            col: columns,
            height: itemHeight,
            width: itemWidth,
        });
        x.value = (0, react_native_reanimated_1.withTiming)(destination.x, utils_1.animationConfig, () => (isGestureActive.value = false));
        y.value = (0, react_native_reanimated_1.withTiming)(destination.y, utils_1.animationConfig, () => (isGestureActive.value = false));
    });
    return (<react_native_gesture_handler_1.GestureDetector gesture={pan}>
      <react_native_reanimated_1.default.View style={animatedStyle}>
        <react_native_reanimated_1.default.View style={react_native_1.StyleSheet.absoluteFill}>
          {children}
        </react_native_reanimated_1.default.View>
      </react_native_reanimated_1.default.View>
    </react_native_gesture_handler_1.GestureDetector>);
};
exports.default = DragAndDrop;

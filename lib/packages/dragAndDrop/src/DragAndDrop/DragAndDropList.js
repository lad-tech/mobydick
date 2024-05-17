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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const react_1 = require("react");
const react_native_1 = require("react-native");
const DragAndDrop_1 = __importDefault(require("./DragAndDrop"));
const DragAndDropList = ({ list, renderItem, itemWidth, itemHeight, columns, contentContainerStyle, }) => {
    const [styles] = (0, mobydick_core_1.useStyles)(createStyleFn);
    const scrollY = (0, react_native_reanimated_1.useSharedValue)(0);
    const scrollView = (0, react_native_reanimated_1.useAnimatedRef)();
    const [heightScrollView, setHeightScrollView] = (0, react_1.useState)(0);
    const positions = (0, react_native_reanimated_1.useSharedValue)(Object.assign({}, ...list.map((_item, index) => ({ [index]: index }))));
    const onScroll = (0, react_native_reanimated_1.useAnimatedScrollHandler)({
        onScroll: ({ contentOffset: { y } }) => {
            scrollY.value = y;
        },
    });
    return (<react_native_1.View style={[styles.container]}>
      <react_native_gesture_handler_1.GestureHandlerRootView style={{ flex: 1 }}>
        <react_native_reanimated_1.default.ScrollView onScroll={onScroll} ref={scrollView} onLayout={event => {
            setHeightScrollView(event.nativeEvent.layout.height);
        }} contentContainerStyle={[
            styles.contentContainer,
            {
                height: Math.ceil(list.length / columns) * itemHeight,
            },
            contentContainerStyle,
        ]} showsVerticalScrollIndicator={false} bounces={false} scrollEventThrottle={16}>
          {list.map((item, index) => {
            return (<DragAndDrop_1.default key={index} positions={positions} id={index} itemWidth={itemWidth} itemHeight={itemHeight} columns={columns} scrollView={scrollView} heightScrollView={heightScrollView} scrollY={scrollY}>
                {renderItem(item, index, list)}
              </DragAndDrop_1.default>);
        })}
        </react_native_reanimated_1.default.ScrollView>
      </react_native_gesture_handler_1.GestureHandlerRootView>
    </react_native_1.View>);
};
const createStyleFn = (0, mobydick_core_1.createStyles)(() => ({
    container: {
        flex: 1,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));
exports.default = DragAndDropList;

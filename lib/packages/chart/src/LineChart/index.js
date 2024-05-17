"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineChart = void 0;
const react_native_skia_1 = require("@shopify/react-native-skia");
const react_native_reanimated_1 = require("react-native-reanimated");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const Coordinates_1 = __importDefault(require("../components/Coordinates"));
const constants_1 = require("../utils/constants");
const Section_1 = __importDefault(require("../components/Section"));
const generatePeriodsWithLinePaths_1 = require("../utils/generatePeriodsWithLinePaths");
const Lines_1 = require("../components/Lines");
const PointerPopup_1 = __importDefault(require("../components/PointerPopup"));
const LineChart = ({ dataset, renderHeader, renderSectionItem, containerStyles, chartContainerStyles, sectionContainerStyles, formatterY, formatterX, hideDataPoints = false, hidePointer = false, }) => {
    const { colors, spaces } = (0, mobydick_core_1.useTheme)();
    const fontMgr = (0, react_native_skia_1.useFonts)({
        Inter: [
            require('@lad-tech/mobydick-core/src/typography/assets/fonts/Inter-Bold.ttf'),
            require('@lad-tech/mobydick-core/src/typography/assets/fonts/Inter-Italic.ttf'),
            require('@lad-tech/mobydick-core/src/typography/assets/fonts/Inter-Regular.ttf'),
        ],
    });
    const font = (0, react_native_skia_1.useFont)(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@lad-tech/mobydick-core/src/typography/assets/fonts/Inter-Medium.ttf'), 12);
    const ref = (0, react_native_skia_1.useCanvasRef)();
    const { height: frameHeight, width: frameWidth } = (0, react_native_safe_area_context_1.useSafeAreaFrame)();
    const size = (0, react_native_reanimated_1.useSharedValue)({
        height: frameHeight,
        width: frameWidth,
    });
    const periodsWithPaths = (0, react_native_reanimated_1.useDerivedValue)(() => {
        return (0, generatePeriodsWithLinePaths_1.generatePeriodsWithLinePaths)({
            dataset,
            width: size.value.width,
            height: size.value.height,
        });
    });
    // animation value to transition from one graph to the next
    const transition = (0, react_native_reanimated_1.useSharedValue)(0);
    // indices of the current and next graphs
    const state = (0, react_native_reanimated_1.useSharedValue)({
        next: 0,
        current: 0,
    });
    const maxY = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { current, next } = state.value;
        const start = periodsWithPaths.value[current];
        const end = periodsWithPaths.value[next];
        if (start === undefined || end === undefined) {
            throw Error('start === undefined || end === undefined');
        }
        return end.maxY;
    });
    const maxX = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { current, next } = state.value;
        const start = periodsWithPaths.value[current];
        const end = periodsWithPaths.value[next];
        if (start === undefined || end === undefined) {
            throw Error('start === undefined || end === undefined');
        }
        return end.maxX;
    });
    const minX = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { current, next } = state.value;
        const start = periodsWithPaths.value[current];
        const end = periodsWithPaths.value[next];
        if (start === undefined || end === undefined) {
            throw Error('start === undefined || end === undefined');
        }
        return end.minX;
    });
    const minY = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { current, next } = state.value;
        const start = periodsWithPaths.value[current];
        const end = periodsWithPaths.value[next];
        if (start === undefined || end === undefined) {
            throw Error('start === undefined || end === undefined');
        }
        return end.minY;
    });
    const coordinatesLength = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { current, next } = state.value;
        const start = periodsWithPaths.value[current];
        const end = periodsWithPaths.value[next];
        if (start === undefined || end === undefined) {
            throw Error('start === undefined || end === undefined');
        }
        return end.maxCoordinatesLength;
    });
    const selectedPeriodName = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { next } = state.value;
        const periods = Object.keys(dataset);
        const periodName = periods[next];
        if (periodName === undefined) {
            throw Error('period === undefined');
        }
        return periodName;
    });
    const selectedPeriod = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const check = dataset[selectedPeriodName.value];
        if (check === undefined) {
            throw Error('selectedPeriod === undefined');
        }
        return check;
    });
    const selectedValues = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { next } = state.value;
        const end = periodsWithPaths.value[next];
        if (end === undefined) {
            throw Error('period === undefined || end === undefined || selectedPeriod === undefined');
        }
        return end.lines.map(({ name }, index) => {
            const lineCoords = selectedPeriod.value[index]?.coordinates ?? [];
            const { x, y } = lineCoords[lineCoords.length - 1] ?? { x: 0, y: 0 };
            return {
                name,
                y,
                x,
            };
        });
    });
    const x = (0, react_native_reanimated_1.useSharedValue)(-150);
    const y = (0, react_native_reanimated_1.useSharedValue)(-150);
    const pan = react_native_gesture_handler_1.Gesture.Pan()
        .onBegin(event => {
        x.value = (0, react_native_reanimated_1.interpolate)(event.x, [
            constants_1.chartPaddingHorizontal + constants_1.chartPaddingHorizontal / 2,
            size.value.width - constants_1.chartPaddingHorizontal / 2,
        ], [
            constants_1.chartPaddingHorizontal + constants_1.chartPaddingHorizontal / 2,
            size.value.width - constants_1.chartPaddingHorizontal / 2,
        ], react_native_reanimated_1.Extrapolation.CLAMP);
        y.value = (0, react_native_reanimated_1.interpolate)(event.y, [size.value.height - constants_1.chartPaddingVertical, constants_1.chartPaddingVertical / 2], [size.value.height - constants_1.chartPaddingVertical, constants_1.chartPaddingVertical / 2], react_native_reanimated_1.Extrapolation.CLAMP);
    })
        .onUpdate(event => {
        x.value = (0, react_native_reanimated_1.interpolate)(event.x, [
            constants_1.chartPaddingHorizontal + constants_1.chartPaddingHorizontal / 2,
            size.value.width - constants_1.chartPaddingHorizontal / 2,
        ], [
            constants_1.chartPaddingHorizontal + constants_1.chartPaddingHorizontal / 2,
            size.value.width - constants_1.chartPaddingHorizontal / 2,
        ], react_native_reanimated_1.Extrapolation.CLAMP);
        y.value = (0, react_native_reanimated_1.interpolate)(event.y, [size.value.height - constants_1.chartPaddingVertical, constants_1.chartPaddingVertical / 2], [size.value.height - constants_1.chartPaddingVertical, constants_1.chartPaddingVertical / 2], react_native_reanimated_1.Extrapolation.CLAMP);
    })
        .onEnd(() => {
        x.value = -150;
        y.value = -150;
    });
    if (!fontMgr || !font)
        return null;
    return (<react_native_gesture_handler_1.GestureHandlerRootView style={[
            {
                gap: spaces.Space12,
                padding: spaces.Space16,
                borderRadius: spaces.Space12,
                borderColor: colors.BorderSoft,
                borderWidth: spaces.Space1,
                backgroundColor: colors.BgPrimary,
            },
            containerStyles,
        ]}>
      {renderHeader?.({
            selectedPeriodName,
            state,
            transition,
            selectedValues,
        })}
      <react_native_gesture_handler_1.GestureDetector gesture={pan}>
        <react_native_skia_1.Canvas ref={ref} onSize={size} style={[
            {
                flexGrow: 1,
                minHeight: frameHeight / constants_1.defaultChartHeightDivider,
            },
            chartContainerStyles,
        ]}>
          <react_native_skia_1.Group>
            <Lines_1.Lines periodsWithPaths={periodsWithPaths} size={size} state={state} transition={transition} hideDataPoints={hideDataPoints}/>
            <Coordinates_1.default font={font} colors={colors} size={size} maxY={maxY} minY={minY} maxX={maxX} minX={minX} coordinatesLength={coordinatesLength} formatterX={formatterX} formatterY={formatterY}/>
          </react_native_skia_1.Group>
          {!hidePointer && (<PointerPopup_1.default size={size} fontMgr={fontMgr} colors={colors} selectedPeriod={selectedPeriod} x={x} y={y} maxX={maxX} maxY={maxY} minY={minY} minX={minX}/>)}
        </react_native_skia_1.Canvas>
      </react_native_gesture_handler_1.GestureDetector>
      {renderSectionItem && (<Section_1.default state={state} transition={transition} dataset={dataset} renderSectionItem={renderSectionItem} sectionContainerStyles={sectionContainerStyles}/>)}
    </react_native_gesture_handler_1.GestureHandlerRootView>);
};
exports.LineChart = LineChart;
exports.default = exports.LineChart;

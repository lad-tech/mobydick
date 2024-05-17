"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarChart = void 0;
const react_native_skia_1 = require("@shopify/react-native-skia");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const react_native_reanimated_1 = require("react-native-reanimated");
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const constants_1 = require("../utils/constants");
const Coordinates_1 = __importDefault(require("../components/Coordinates"));
const generatePeriodsWithBarPaths_1 = require("../utils/generatePeriodsWithBarPaths");
const Section_1 = __importDefault(require("../components/Section"));
const Line_1 = __importDefault(require("../components/Line"));
const BarChart = ({ dataset, renderHeader, renderSectionItem, containerStyles, chartContainerStyles, sectionContainerStyles, formatterY, formatterX, }) => {
    const font = (0, react_native_skia_1.useFont)(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@lad-tech/mobydick-core/src/typography/assets/fonts/Inter-Regular.ttf'), 12);
    const { colors, spaces } = (0, mobydick_core_1.useTheme)();
    const ref = (0, react_native_skia_1.useCanvasRef)();
    const { height: frameHeight, width: frameWidth } = (0, react_native_safe_area_context_1.useSafeAreaFrame)();
    const canvasSize = (0, react_native_reanimated_1.useSharedValue)({
        height: frameHeight,
        width: frameWidth,
    });
    const size = (0, react_native_reanimated_1.useDerivedValue)(() => {
        return {
            height: canvasSize.value.height,
            width: canvasSize.value.width,
        };
    });
    const periodsWithPaths = (0, react_native_reanimated_1.useDerivedValue)(() => (0, generatePeriodsWithBarPaths_1.generatePeriodsWithBarPaths)({
        dataset,
        width: size.value.width,
        height: size.value.height,
    }));
    // animation value to transition from one graph to the next
    const transition = (0, react_native_reanimated_1.useSharedValue)(0);
    // indices of the current and next graphs
    const state = (0, react_native_reanimated_1.useSharedValue)({
        next: 0,
        current: 0,
    });
    const chartPath = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { current, next } = state.value;
        const start = periodsWithPaths.value[current]?.chartPath ?? react_native_skia_1.Skia.Path.Make();
        const end = periodsWithPaths.value[next]?.chartPath ?? react_native_skia_1.Skia.Path.Make();
        if (end.isInterpolatable(start)) {
            return end.interpolate(start, transition.value);
        }
        return end;
    });
    const colorsBar = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const { current, next } = state.value;
        const start = periodsWithPaths.value[current]?.colors ?? [];
        const end = periodsWithPaths.value[next]?.colors ?? [];
        return end.map((endColor, i) => (0, react_native_skia_1.interpolateColors)(transition.value, [0, 1], [start[i] ?? endColor, endColor]));
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
        return end.coordinatesLength;
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
            throw Error(' end === undefined');
        }
        const { coordinates, name } = selectedPeriod.value[0] ?? {
            coordinates: [],
            name: '',
        };
        const { x, y } = coordinates[coordinates.length - 1] ?? { x: 0, y: 0 };
        return [
            {
                name,
                y,
                x,
            },
        ];
    });
    if (!font)
        return null;
    return (<mobydick_core_1.View style={[
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
      <react_native_skia_1.Canvas ref={ref} onSize={canvasSize} style={[
            {
                flexGrow: 1,
                minHeight: frameHeight / constants_1.defaultChartHeightDivider,
            },
            chartContainerStyles,
        ]}>
        <react_native_skia_1.Group>
          <react_native_skia_1.Group>
            <react_native_skia_1.LinearGradient start={(0, react_native_skia_1.vec)(0, 0)} end={(0, react_native_skia_1.vec)(size.value.width, size.value.height)} colors={colorsBar}/>
            <Line_1.default chartPath={chartPath} strokeWidth={20}/>
          </react_native_skia_1.Group>

          <Coordinates_1.default colors={colors} size={size} font={font} maxY={maxY} maxX={maxX} minX={minX} minY={minY} coordinatesLength={coordinatesLength} formatterX={formatterX} formatterY={formatterY}/>
        </react_native_skia_1.Group>
      </react_native_skia_1.Canvas>
      {renderSectionItem && (<Section_1.default state={state} transition={transition} dataset={dataset} renderSectionItem={renderSectionItem} sectionContainerStyles={sectionContainerStyles}/>)}
    </mobydick_core_1.View>);
};
exports.BarChart = BarChart;
exports.default = exports.BarChart;

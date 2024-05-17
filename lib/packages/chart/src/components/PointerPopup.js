"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_skia_1 = require("@shopify/react-native-skia");
const react_native_reanimated_1 = require("react-native-reanimated");
const utils_1 = require("../utils");
const PointerPopup = ({ size, colors, fontMgr, selectedPeriod, x, y, minX, maxX, formatterX, formatterY, }) => {
    const realX = (0, react_native_reanimated_1.useDerivedValue)(() => {
        return (0, react_native_reanimated_1.interpolate)(x.value, [
            utils_1.chartPaddingHorizontal + utils_1.chartPaddingHorizontal / 2,
            size.value.width - utils_1.chartPaddingHorizontal / 2,
        ], [minX.value, maxX.value], react_native_reanimated_1.Extrapolation.CLAMP);
    }, [x, minX, maxX]);
    const realYs = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const result = [];
        for (const { coordinates, name } of selectedPeriod.value) {
            let closestIndex = 0;
            let lastDiff = Infinity;
            let maxX = 0;
            coordinates.forEach(({ x }, index) => {
                maxX = Math.max(maxX, x);
                const currentDiff = realX.value - x;
                if (currentDiff < lastDiff && x <= realX.value) {
                    lastDiff = currentDiff;
                    closestIndex = index;
                }
            });
            if (maxX < realX.value) {
                continue;
            }
            const closedLeftCoordinates = coordinates[closestIndex];
            const possibleSecondIndex = closestIndex + 1;
            const closedRightCoordinates = coordinates[possibleSecondIndex < coordinates.length ? possibleSecondIndex : 0];
            if (!closedLeftCoordinates)
                throw Error('!closedLeftCoordinates');
            if (!closedRightCoordinates)
                throw Error('!closedRightCoordinates');
            // Similarity of triangles
            //        /|
            //       / |
            //      /  |
            //     /   |
            //    /|   |bY
            //   / |xY |
            //  /__|___|
            //   xl
            //      bl
            const bl = closedRightCoordinates.x - closedLeftCoordinates.x;
            const xl = realX.value - closedLeftCoordinates.x;
            const bY = closedRightCoordinates.y - closedLeftCoordinates.y;
            const xY = (bY / bl) * xl;
            result.push({ y: xY + closedLeftCoordinates.y, name });
        }
        return result;
    });
    const text = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const paragraph = react_native_skia_1.Skia.ParagraphBuilder.Make({
            textAlign: react_native_skia_1.TextAlign.Center,
            textStyle: {
                color: react_native_skia_1.Skia.Color(colors.TextPrimary),
            },
        }, fontMgr).addText(`x=${formatterX?.(realX.value) ?? realX.value.toFixed(2)}\n`);
        let maxTextLength = 0;
        realYs.value.forEach(({ y, name }, index) => {
            const text = `y:${name}=${formatterY?.(y) ?? y.toFixed(2)}${index < realYs.value.length - 1 ? '\n' : ''}`;
            maxTextLength = Math.max(maxTextLength, text.length);
            paragraph.addText(text);
        });
        const r = paragraph.build();
        r.layout(maxTextLength * 7);
        return r;
    });
    const adjustedX = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const textWidth = text.value.getMaxWidth();
        const halfWidth = size.value.width / 2;
        const touchPositionX = x.value;
        let dx = touchPositionX;
        if (touchPositionX > halfWidth) {
            dx = touchPositionX - textWidth;
        }
        return dx;
    });
    const adjustedY = (0, react_native_reanimated_1.useDerivedValue)(() => {
        const textHeight = text.value.getHeight();
        const halfHeight = size.value.height / 2;
        const touchPositionY = y.value;
        let dy = touchPositionY;
        if (touchPositionY > halfHeight) {
            dy = touchPositionY - textHeight;
        }
        return dy;
    });
    const boxHeight = (0, react_native_reanimated_1.useDerivedValue)(() => {
        return text.value.getHeight();
    });
    const boxWidth = (0, react_native_reanimated_1.useDerivedValue)(() => {
        return text.value.getMaxWidth();
    });
    const borderRect = (0, react_native_reanimated_1.useDerivedValue)(() => {
        return (0, react_native_skia_1.rrect)((0, react_native_skia_1.rect)(adjustedX.value, adjustedY.value, boxWidth.value, boxHeight.value), 10, 10);
    });
    const line1 = (0, react_native_reanimated_1.useDerivedValue)(() => (0, react_native_skia_1.vec)(x.value, 0));
    const line2 = (0, react_native_reanimated_1.useDerivedValue)(() => (0, react_native_skia_1.vec)(x.value, size.value.height - utils_1.chartPaddingVertical / 2));
    return (<react_native_skia_1.Group>
      <react_native_skia_1.RoundedRect x={adjustedX} y={adjustedY} width={boxWidth} height={boxHeight} r={6} color={colors.BgPrimaryExtra}/>
      <react_native_skia_1.RoundedRect rect={borderRect} color={colors.BorderSoft} style="stroke" strokeWidth={1}/>
      <react_native_skia_1.Paragraph paragraph={text} x={adjustedX} y={adjustedY} width={boxWidth}/>
      <react_native_skia_1.Line p1={line1} p2={line2} color={colors.BorderHard} strokeWidth={2}>
        <react_native_skia_1.DashPathEffect intervals={[4, 4]}/>
      </react_native_skia_1.Line>
    </react_native_skia_1.Group>);
};
exports.default = PointerPopup;

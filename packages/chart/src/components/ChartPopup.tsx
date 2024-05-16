import {
  DashPathEffect,
  Group,
  Line,
  Paragraph,
  rect,
  RoundedRect,
  rrect,
  Skia,
  SkTypefaceFontProvider,
  TextAlign,
  vec,
} from '@shopify/react-native-skia';
import {FC, PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';
import {
  Extrapolation,
  interpolate,
  SharedValue,
  useDerivedValue,
} from 'react-native-reanimated';
import {IThemeContext} from '@lad-tech/mobydick-core';

import {chartPaddingHorizontal, chartPaddingVertical} from '../utils';
import {IChart, IFormatter} from '../types';

interface IChartPopup {
  size: SharedValue<{height: number; width: number}>;
  colors: IThemeContext['colors'];
  fontMgr: SkTypefaceFontProvider;

  selectedPeriod: SharedValue<IChart[]>;

  x: SharedValue<number>;
  y: SharedValue<number>;
  minX: SharedValue<number>;
  maxX: SharedValue<number>;
  minY: SharedValue<number>;
  maxY: SharedValue<number>;

  formatterX?: IFormatter | undefined;
  formatterY?: IFormatter | undefined;

  style?: ViewStyle;
}

const ChartPopup: FC<PropsWithChildren<IChartPopup>> = ({
  size,
  colors,
  fontMgr,

  selectedPeriod,

  x,
  y,
  minX,
  maxX,
}) => {
  const realX = useDerivedValue(() => {
    return interpolate(
      x.value,
      [
        chartPaddingHorizontal + chartPaddingHorizontal / 2,
        size.value.width - chartPaddingHorizontal / 2,
      ],
      [minX.value, maxX.value],
      Extrapolation.CLAMP,
    );
  }, [x, minX, maxX]);

  const realYs = useDerivedValue(() => {
    const result = [];

    for (const {coordinates, name} of selectedPeriod.value) {
      let closestIndex = 0;
      let lastDiff = Infinity;
      let maxX = 0;

      coordinates.forEach(({x}, index) => {
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
      const closedRightCoordinates =
        coordinates[
          possibleSecondIndex < coordinates.length ? possibleSecondIndex : 0
        ];

      if (!closedLeftCoordinates) throw Error('!closedLeftCoordinates');
      if (!closedRightCoordinates) throw Error('!closedRightCoordinates');

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

      result.push({y: xY + closedLeftCoordinates.y, name});
    }

    return result;
  });

  const text = useDerivedValue(() => {
    const paragraph = Skia.ParagraphBuilder.Make(
      {
        textAlign: TextAlign.Center,
        textStyle: {
          color: Skia.Color(colors.TextPrimary),
        },
      },
      fontMgr,
    ).addText(`x=${realX.value.toFixed(2)}\n`);

    let maxTextLength = 0;

    realYs.value.forEach(({y, name}, index) => {
      const text = `y:${name}=${y.toFixed(2)}${index < realYs.value.length - 1 ? '\n' : ''}`;

      maxTextLength = Math.max(maxTextLength, text.length);

      paragraph.addText(text);
    });

    const r = paragraph.build();

    r.layout(maxTextLength * 7);

    return r;
  });

  const adjustedX = useDerivedValue(() => {
    const textWidth = text.value.getMaxWidth();
    const halfWidth = size.value.width / 2;

    const touchPositionX = x.value;

    let dx = touchPositionX;

    if (touchPositionX > halfWidth) {
      dx = touchPositionX - textWidth;
    }

    return dx;
  });

  const adjustedY = useDerivedValue(() => {
    const textHeight = text.value.getHeight();
    const halfHeight = size.value.height / 2;

    const touchPositionY = y.value;

    let dy = touchPositionY;

    if (touchPositionY > halfHeight) {
      dy = touchPositionY - textHeight;
    }

    return dy;
  });

  const boxHeight = useDerivedValue(() => {
    return text.value.getHeight();
  });

  const boxWidth = useDerivedValue(() => {
    return text.value.getMaxWidth();
  });

  const borderRect = useDerivedValue(() => {
    return rrect(
      rect(adjustedX.value, adjustedY.value, boxWidth.value, boxHeight.value),
      10,
      10,
    );
  });

  const line1 = useDerivedValue(() => vec(x.value, 0));
  const line2 = useDerivedValue(() =>
    vec(x.value, size.value.height - chartPaddingVertical / 2),
  );

  return (
    <Group>
      <RoundedRect
        x={adjustedX}
        y={adjustedY}
        width={boxWidth}
        height={boxHeight}
        r={6}
        color={colors.BgPrimaryExtra}
      />
      <RoundedRect
        rect={borderRect}
        color={colors.BorderSoft}
        style="stroke"
        strokeWidth={1}
      />
      <Paragraph
        paragraph={text}
        x={adjustedX}
        y={adjustedY}
        width={boxWidth}
      />
      <Line p1={line1} p2={line2} color={colors.BorderHard} strokeWidth={2}>
        <DashPathEffect intervals={[4, 4]} />
      </Line>
    </Group>
  );
};

export default ChartPopup;

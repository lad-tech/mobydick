import {
  Group,
  Paragraph,
  RoundedRect,
  SkFont,
  Skia,
  TextAlign,
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

import {chartPaddingHorizontal} from '../utils';
import {IChart, IFormatter} from '../types';

interface IChartPopup {
  size: SharedValue<{height: number; width: number}>;
  font: SkFont;
  colors: IThemeContext['colors'];

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
    const paragraph = Skia.ParagraphBuilder.Make({
      textAlign: TextAlign.Center,
    }).addText(`x=${realX.value.toFixed(2)}\n`);

    realYs.value.forEach(({y, name}, index) =>
      paragraph.addText(
        `y:${name}=${y.toFixed(2)}${index < realYs.value.length - 1 ? '\n' : ''}`,
      ),
    );

    const r = paragraph.build();

    r.layout(100);

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

  return (
    <Group opacity={0.5}>
      <RoundedRect
        x={adjustedX}
        y={adjustedY}
        width={boxWidth}
        height={boxHeight}
        r={6}
        color={'rgb(120,81,169)'}
      />
      <Paragraph
        paragraph={text}
        x={adjustedX}
        y={adjustedY}
        width={boxWidth}
      />
    </Group>
  );
};

export default ChartPopup;

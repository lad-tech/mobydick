import {Group, Path, SkFont, Skia, Text} from '@shopify/react-native-skia';
import {useState} from 'react';
import {
  runOnJS,
  SharedValue,
  useAnimatedReaction,
  useDerivedValue,
} from 'react-native-reanimated';
import {defaultTheme} from '@lad-tech/mobydick-core';

import {chartPaddingHorizontal, chartPaddingVertical} from '../utils/constants';
import {IFormatter} from '../types';
import {generateCoordinatesPath} from '../utils/generateCoordinatesPath';
import {getCoordinateValues} from '../utils/getCoordinateValues';

export interface ICoordinatesProps {
  font: SkFont | null;
  colors: (typeof defaultTheme.colors)[0];
  width: number;
  height: number;

  maxX: SharedValue<number>;
  maxY: SharedValue<number>;
  minX: SharedValue<number>;
  minY: SharedValue<number>;
  coordinatesLength: SharedValue<number>;

  formatterX?: IFormatter | undefined;
  formatterY?: IFormatter | undefined;
}

export const Coordinates = ({
  font,
  colors,
  width,
  height,
  maxX,
  minX,
  maxY,
  minY,
  coordinatesLength,
  formatterX,
  formatterY,
}: ICoordinatesProps) => {
  const [, setTrigger] = useState(0);
  const coordinatesPath = generateCoordinatesPath({width, height});

  const coords = useDerivedValue(() =>
    getCoordinateValues({
      maxX: maxX.value,
      minX: minX.value,
      maxY: maxY.value,
      minY: minY.value,
      height,
      width,
      coordinatesLength: coordinatesLength.value,
    }),
  );

  const {coordinateValuesY, coordinateValuesX} = coords.value;

  const coordinateValueYMaxLength =
    (
      formatterY?.(
        coordinateValuesY[coordinateValuesY.length - 1]?.value ?? 0,
      ) ?? coordinateValuesY[0]?.value.toFixed()
    )?.length ?? 0;

  useAnimatedReaction(
    () => {
      return coords.value;
    },
    (currentValue, previousValue) => {
      if (currentValue !== previousValue) {
        runOnJS(setTrigger)(trigger => trigger + 1);
      }
    },
  );
  let lastX = 0;

  return (
    <Group>
      <Path
        path={coordinatesPath}
        style="stroke"
        strokeJoin="round"
        strokeWidth={2}
        color={colors.BorderHard}
      />
      {coordinateValuesY.map(({coordinate, value}, index) => {
        const path = Skia.Path.Make()
          .moveTo(chartPaddingHorizontal, coordinate)
          .lineTo(width, coordinate);

        const texSymbolWidth = 8;
        const texSymbolHeight = 10;

        const text = formatterY?.(value) ?? value.toFixed(2);

        let x = (coordinateValueYMaxLength - text.length) * texSymbolWidth;
        const y = coordinate + texSymbolHeight / 2;

        if (x < 0) {
          x = 0;
        }

        return (
          <Group key={coordinate.toString() + index}>
            <Path
              path={path}
              style="stroke"
              strokeJoin="round"
              color={colors.BorderNormal}
            />
            <Text
              font={font}
              text={text}
              y={y}
              x={x}
              color={colors.TextSecondary}
            />
          </Group>
        );
      })}
      {coordinateValuesX.map(({coordinate, value}, index) => {
        const path = Skia.Path.Make()
          .moveTo(coordinate, height)
          .lineTo(coordinate, chartPaddingVertical);

        const texSymbolWidth = 8;
        const texSymbolHeight = 10;
        const paddingFromChart = 5;

        const text = formatterX?.(value) ?? value.toFixed(2);

        const x = coordinate - (text.length * texSymbolWidth) / 2;
        const y = height + texSymbolHeight + paddingFromChart;

        const coordinateEndOfText = x + text.length * texSymbolWidth;

        const isCoordinateWithText = x >= lastX;

        if (isCoordinateWithText) {
          lastX = coordinateEndOfText;
        }

        return (
          <Group key={coordinate.toString() + index}>
            <Path
              path={path}
              style="stroke"
              strokeJoin="round"
              color={colors.BorderNormal}
            />
            {isCoordinateWithText && (
              <Text
                font={font}
                text={text}
                y={y}
                x={x}
                color={colors.TextSecondary}
              />
            )}
          </Group>
        );
      })}
    </Group>
  );
};

export default Coordinates;

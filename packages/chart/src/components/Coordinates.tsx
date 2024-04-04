import {Group, Path, SkFont, Skia, Text} from '@shopify/react-native-skia';
import {SharedValue, useDerivedValue} from 'react-native-reanimated';
import {IThemeContext} from '@lad-tech/mobydick-core';

import {IFormatter} from '../types';
import {generateCoordinatesPath} from '../utils/generateCoordinatesPath';
import {
  getCoordinateValues,
  IGetCoordinateValuesReturn,
} from '../utils/getCoordinateValues';

interface ICoordYProps {
  font: SkFont;
  coords: SharedValue<IGetCoordinateValuesReturn>;
  coordinateValueYMaxLength: SharedValue<number>;
  colors: IThemeContext['colors'];
  index: number;
}

const CoordY = ({
  font,
  coordinateValueYMaxLength,
  coords,
  index,
  colors,
}: ICoordYProps) => {
  const coordinate = useDerivedValue(() => {
    const coordinate = coords.value.coordinateValuesY[index]?.coordinate ?? 0;

    return coordinate;
  });

  const value = useDerivedValue(() => {
    const value = coords.value.coordinateValuesY[index]?.value ?? '';

    return value;
  });
  const path = useDerivedValue(() => {
    const path =
      coords.value.coordinateValuesY[index]?.path ?? Skia.Path.Make();

    return path;
  });

  const x = useDerivedValue(() => {
    const {width} = font.measureText(value.value);
    const symbolSize = width / value.value.length;
    const r = -coordinateValueYMaxLength.value * symbolSize;

    if (r < 0) {
      return 0;
    }

    return r;
  });

  return (
    <Group>
      <Path
        path={path}
        style="stroke"
        strokeJoin="round"
        color={colors.BorderNormal}
      />
      <Text
        font={font}
        text={value}
        y={coordinate}
        x={x}
        color={colors.TextMuted}
      />
    </Group>
  );
};

interface ICoordXProps {
  font: SkFont;
  coords: SharedValue<IGetCoordinateValuesReturn>;
  colors: IThemeContext['colors'];
  index: number;
  size: SharedValue<{height: number; width: number}>;
}

const CoordX = ({font, size, coords, index, colors}: ICoordXProps) => {
  const path = useDerivedValue(() => {
    const path =
      coords.value.coordinateValuesX[index]?.path ?? Skia.Path.Make();

    return path;
  });
  const value = useDerivedValue(() => {
    const value = coords.value.coordinateValuesX[index]?.value ?? '';

    return value;
  });

  const coordinate = useDerivedValue(() => {
    const coordinate = coords.value.coordinateValuesX[index]?.coordinate ?? 0;

    return coordinate;
  });

  const y = useDerivedValue(() => {
    return size.value.height;
  });

  return (
    <Group>
      <Path
        path={path}
        style="stroke"
        strokeJoin="round"
        color={colors.BorderNormal}
      />
      <Text
        font={font}
        text={value}
        y={y}
        x={coordinate}
        color={colors.TextMuted}
      />
    </Group>
  );
};
export interface ICoordinatesProps {
  font: SkFont;
  colors: IThemeContext['colors'];
  size: SharedValue<{height: number; width: number}>;

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
  size,
  maxX,
  minX,
  maxY,
  minY,
  coordinatesLength,
  formatterX,
  formatterY,
}: ICoordinatesProps) => {
  const coordinatesPath = useDerivedValue(() =>
    generateCoordinatesPath({
      width: size.value.width,
      height: size.value.height,
    }),
  );

  const coords = useDerivedValue(() =>
    getCoordinateValues({
      font,
      maxX: maxX.value,
      minX: minX.value,
      maxY: maxY.value,
      minY: minY.value,
      height: size.value.height,
      width: size.value.width,
      coordinatesLength: coordinatesLength.value,
      formatterX,
      formatterY,
    }),
  );

  const coordinateValueYMaxLength = useDerivedValue(() => {
    return (
      (
        formatterY?.(
          coords.value.coordinateValuesY[
            coords.value.coordinateValuesY.length - 1
          ]?.value.length ?? 0,
        ) ?? coords.value.coordinateValuesY[0]?.value
      )?.length ?? 0
    );
  });

  if (!font) return null;

  return (
    <Group>
      <Path
        path={coordinatesPath}
        style="stroke"
        strokeJoin="round"
        strokeWidth={2}
        color={colors.BorderHard}
      />
      {coords.value.coordinateValuesY.map((_, index) => {
        return (
          <CoordY
            key={index.toString()}
            font={font}
            coords={coords}
            colors={colors}
            index={index}
            coordinateValueYMaxLength={coordinateValueYMaxLength}
          />
        );
      })}
      {coords.value.coordinateValuesX.map((_, index) => {
        return (
          <CoordX
            key={index.toString()}
            font={font}
            coords={coords}
            colors={colors}
            index={index}
            size={size}
          />
        );
      })}
    </Group>
  );
};

export default Coordinates;

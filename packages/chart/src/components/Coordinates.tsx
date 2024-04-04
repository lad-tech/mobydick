import {Group, Path, SkFont} from '@shopify/react-native-skia';
import {SharedValue, useDerivedValue} from 'react-native-reanimated';
import {IThemeContext} from '@lad-tech/mobydick-core';

import {IFormatter} from '../types';
import {generateCoordinatesPath} from '../utils/generateCoordinatesPath';
import {getCoordinateValues} from '../utils/getCoordinateValues';

import {CoordY} from './CoordY';
import {CoordX} from './CoordX';

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

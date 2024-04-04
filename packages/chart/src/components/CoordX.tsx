import {SharedValue, useDerivedValue} from 'react-native-reanimated';
import {Group, Path, SkFont, Skia, Text} from '@shopify/react-native-skia';
import {IThemeContext} from '@lad-tech/mobydick-core';

import {IGetCoordinateValuesReturn} from '../utils';

interface ICoordXProps {
  font: SkFont;
  coords: SharedValue<IGetCoordinateValuesReturn>;
  colors: IThemeContext['colors'];
  index: number;
  size: SharedValue<{height: number; width: number}>;
}

export const CoordX = ({font, size, coords, index, colors}: ICoordXProps) => {
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

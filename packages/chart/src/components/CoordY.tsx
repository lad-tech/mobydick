import {Group, Path, SkFont, Skia, Text} from '@shopify/react-native-skia';
import {SharedValue, useDerivedValue} from 'react-native-reanimated';
import {IThemeContext} from '@lad-tech/mobydick-core';

import {IGetCoordinateValuesReturn} from '../utils';

interface ICoordYProps {
  font: SkFont;
  coords: SharedValue<IGetCoordinateValuesReturn>;
  coordinateValueYMaxLength: SharedValue<number>;
  colors: IThemeContext['colors'];
  index: number;
}

export const CoordY = ({
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

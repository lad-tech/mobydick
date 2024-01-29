import type {PathProps, SkiaDefaultProps} from '@shopify/react-native-skia';
import {LinearGradient, Path, SkPath, vec} from '@shopify/react-native-skia';
import {SharedValue} from 'react-native-reanimated';
import {defaultTheme} from '@lad-tech/mobydick-core';

interface IChartProps extends SkiaDefaultProps<PathProps, 'start' | 'end'> {
  colors: (typeof defaultTheme.colors)[0];
  path: Readonly<SharedValue<SkPath>>;
  width: number;
}

export const COLORS = [
  '#E0F5E9',
  '#9BE1DA',
  '#56CDCB',
  '#3B8B8E',
  '#EF1E1C',
  '#F43B1D',
  '#F9571D',
  '#FF8A57',
];

export const Line = ({path, width, colors, ...rest}: IChartProps) => {
  return (
    <Path
      path={path}
      style="stroke"
      strokeJoin="round"
      strokeWidth={2}
      color={colors.ChartFirst}
      {...rest}>
      <LinearGradient start={vec(0, 0)} end={vec(width, 0)} colors={COLORS} />
    </Path>
  );
};

export default Line;

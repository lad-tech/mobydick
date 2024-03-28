import {
  Color,
  LinearGradient,
  Path,
  PathProps,
  SkiaDefaultProps,
  SkPath,
  vec,
} from '@shopify/react-native-skia';
import {SharedValue} from 'react-native-reanimated';

interface IChartProps
  extends Omit<SkiaDefaultProps<PathProps, 'start' | 'end'>, 'path'> {
  chartPath: SharedValue<SkPath>;
  width: number;
  colors?: SharedValue<Color[]>;
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

export const Line = ({chartPath, width, colors, ...rest}: IChartProps) => {
  return (
    <Path
      path={chartPath}
      style="stroke"
      strokeJoin="round"
      strokeWidth={2}
      {...rest}>
      <LinearGradient
        start={vec(0, 0)}
        end={vec(width, 0)}
        colors={colors ?? COLORS}
      />
    </Path>
  );
};

export default Line;

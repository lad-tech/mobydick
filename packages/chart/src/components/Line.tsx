import {
  Path,
  PathProps,
  SkiaDefaultProps,
  SkPath,
} from '@shopify/react-native-skia';
import {SharedValue} from 'react-native-reanimated';

interface IChartProps
  extends Omit<SkiaDefaultProps<PathProps, 'start' | 'end'>, 'path'> {
  chartPath: SharedValue<SkPath>;
}

export const Line = ({chartPath, ...rest}: IChartProps) => {
  return (
    <Path
      path={chartPath}
      style="stroke"
      strokeJoin="round"
      strokeWidth={2}
      {...rest}
    />
  );
};

export default Line;

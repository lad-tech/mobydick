import {SharedValue, useDerivedValue} from 'react-native-reanimated';
import {SkPath} from '@shopify/react-native-skia';

import {Point} from './Point';

interface IPointsProps {
  pointIndex: number;
  chartPath: SharedValue<SkPath>;
}

export const PointsOfLine = ({pointIndex, chartPath}: IPointsProps) => {
  const coords = useDerivedValue(() => {
    const [, x, y] = chartPath.value.toCmds()[pointIndex] ?? [];

    return {
      x: x || 0,
      y: y || 0,
    };
  });

  return <Point r={4} coords={coords} />;
};

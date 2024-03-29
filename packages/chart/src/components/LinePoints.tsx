import {SharedValue, useDerivedValue} from 'react-native-reanimated';
import {SkPath} from '@shopify/react-native-skia';

import {PointOfLine} from './PointOfLine';

interface IPointsProps {
  chartPath: SharedValue<SkPath>;
}

export const LinePoints = ({chartPath}: IPointsProps) => {
  const linePoints = useDerivedValue(() => {
    const cmd = chartPath.value.toCmds() ?? [];
    return cmd;
  });

  return (
    <>
      {linePoints.value.map((_, pointIndex) => {
        return (
          <PointOfLine
            key={`${pointIndex}`}
            pointIndex={pointIndex}
            chartPath={chartPath}
          />
        );
      })}
    </>
  );
};

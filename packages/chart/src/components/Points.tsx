import {SharedValue, useDerivedValue} from 'react-native-reanimated';
import {SkPath} from '@shopify/react-native-skia';

import {PointsOfLine} from './PointsOfLine';

interface IPointsProps {
  chartPath: SharedValue<SkPath>;
}

export const Points = ({chartPath}: IPointsProps) => {
  const linePoints = useDerivedValue(() => {
    const cmd = chartPath.value.toCmds() ?? [];
    return cmd;
  });

  return (
    <>
      {linePoints.value.map((_, pointIndex) => {
        return (
          <PointsOfLine
            key={`${pointIndex}`}
            pointIndex={pointIndex}
            chartPath={chartPath}
          />
        );
      })}
    </>
  );
};

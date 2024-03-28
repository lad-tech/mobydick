import {Circle} from '@shopify/react-native-skia';
import {SharedValue} from 'react-native-reanimated';

interface IChartDot {
  coords: SharedValue<{x: number; y: number}>;
  r: number;
}
export const ChartDot = ({coords, r}: IChartDot) => {
  return <Circle c={coords} r={r} color="lightblue" />;
};

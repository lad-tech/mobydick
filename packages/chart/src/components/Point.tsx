import {Circle} from '@shopify/react-native-skia';
import {SharedValue} from 'react-native-reanimated';

interface IPointProps {
  coords: SharedValue<{x: number; y: number}>;
  r: number;
}
export const Point = ({coords, r}: IPointProps) => {
  return <Circle c={coords} r={r} />;
};

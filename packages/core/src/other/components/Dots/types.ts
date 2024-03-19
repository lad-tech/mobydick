import {ViewStyle} from 'react-native';

export interface IDotsProps {
  length: number;
  activeDot: number;
  animateAutoScroll?: boolean;
  fixedSize?: number | undefined;
  activeDotColor?: string | undefined;
  passiveDotColor?: string | undefined;
  dotsStyles?: ViewStyle | ViewStyle[] | undefined;
}

import {SvgProps} from 'react-native-svg';

interface IIndicatorProps {
  steps: number;
  step: number;
  indicatorHeight?: number;
  indicatorWidth?: number;
  indicatorBorderRadius?: number;
  indicatorColor?: string;
}

export type IndicatorProps = IIndicatorProps & SvgProps;

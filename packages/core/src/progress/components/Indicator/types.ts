import {SvgProps} from 'react-native-svg';
import {ViewStyle} from 'react-native';

interface IIndicatorProps {
  percent: number;
  indicatorViewStyles?: ViewStyle;
  indicatorStyles?: ViewStyle;
}

export type IndicatorProps = IIndicatorProps & SvgProps;

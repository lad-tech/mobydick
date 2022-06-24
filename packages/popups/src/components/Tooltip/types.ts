import {TextStyle, ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export interface IPosition {
  top?: number | string;
  left?: number | string;
  bottom?: number | string;
  right?: number | string;
}

export interface ITooltip {
  message: string | null;
  position?: IPosition;
  element?: JSX.Element;
  styleContainer?: ViewStyle;
  textStyle?: TextStyle;
  isArrow?: boolean;
  arrowStyle?: ViewStyle;
  children?: ReactNode;
}

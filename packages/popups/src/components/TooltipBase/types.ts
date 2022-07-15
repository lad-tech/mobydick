import {TextStyle, ViewStyle} from 'react-native';
import {ReactNode} from 'react';

// export interface IPosition {
//   top?: number | string;
//   left?: number | string;
//   bottom?: number | string;
//   right?: number | string;
// }

export enum IPosition {
  top = 'top',
  bottom = 'bottom',
}

export enum IPlacement {
  start = 'start',
  center = 'center',
  end = 'end',
}

export interface IArrowViewPopup {
  placement: IPlacement;
  position: IPosition;
  arrowViewStyles?: ViewStyle;
}

export interface ITooltip {
  isVisible: boolean;
  position: IPosition;
  element?: JSX.Element;
  styleContainer?: ViewStyle;
  titleStyles?: TextStyle;
  children: ReactNode;
}

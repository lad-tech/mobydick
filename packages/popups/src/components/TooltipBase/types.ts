import {TextStyle, ViewStyle} from 'react-native';
import {ReactNode} from 'react';

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
  colorTooltip: string;
}

export interface ITooltip {
  isVisible: boolean;
  position: IPosition;
  element?: JSX.Element;
  styleContainer?: ViewStyle;
  titleStyles?: TextStyle;
  children: ReactNode;
  placement?: IPlacement;
}

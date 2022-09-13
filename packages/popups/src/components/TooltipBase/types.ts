import {ColorValue, ViewStyle} from 'react-native';

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
  colorTooltip: ColorValue;
}

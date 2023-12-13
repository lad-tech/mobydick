import {StyleProp, ViewStyle} from 'react-native';
import {PropsWithChildren, RefObject} from 'react';

import {IPopup, IPosition} from '../../types';
import {ITouchableOpacity} from '../../../basic';

export enum IPlacement {
  start = 'start',
  center = 'center',
  end = 'end',
}

export interface IArrowViewPopup {
  placement: IPlacement;
  position: IPosition;
  arrowViewStyles?: ViewStyle | ViewStyle[];
}

export interface ITooltipBaseProps
  extends PropsWithChildren<Omit<IPopup, 'Content'>> {
  overlayStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  position: IPosition;
  placement: IPlacement;
  refCurrent: RefObject<ITouchableOpacity>;
  timeShow?: number;
}

import {StyleProp, ViewStyle} from 'react-native';
import {PropsWithChildren} from 'react';

import {IPopup, IPosition} from '../../types';

export interface ISnackbarProps
  extends PropsWithChildren<Omit<IPopup, 'Content'>> {
  onClose: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  position: IPosition;
  timeShow?: number;
}

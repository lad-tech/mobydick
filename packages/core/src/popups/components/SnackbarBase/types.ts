import {StyleProp, ViewStyle} from 'react-native';
import {PropsWithChildren} from 'react';

import {IPopup, IPosition} from '../../types';

export interface ISnackbarProps
  extends PropsWithChildren<Omit<IPopup, 'Content'>> {
  overlayStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  position: IPosition;
  timeShow?: number;
}

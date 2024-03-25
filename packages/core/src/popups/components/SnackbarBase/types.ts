import {StyleProp, ViewStyle} from 'react-native';
import {PropsWithChildren} from 'react';

import {IPopup, IPosition} from '../../types';

export interface ISnackbarProps
  extends PropsWithChildren<Omit<IPopup, 'Content'>> {
  onClose: () => void;
  position: IPosition;
  containerStyle?: StyleProp<ViewStyle>;
  overlayStyle?: StyleProp<ViewStyle>;
  timeShow?: number;
}

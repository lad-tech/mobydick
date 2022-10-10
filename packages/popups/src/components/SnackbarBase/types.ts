import {StyleProp, ViewStyle} from 'react-native';

import {IPopup, IPosition} from '../../types';

export interface ISnackbarProps extends Omit<IPopup, 'Content'> {
  onClose: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  position: IPosition;
  timeShow?: number;
}

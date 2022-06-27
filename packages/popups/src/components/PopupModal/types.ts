import {ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export interface IPopupModal {
  style?: ViewStyle;
  isExitIcon?: boolean;
  title?: string;
  titleStyles?: ViewStyle;
  children?: ReactNode;
}

import {StyleProp, ViewStyle} from 'react-native';

import {IButtonTypes} from '../../../cta';

export interface IModalProps {
  title: string;
  descriptionText: string;
  buttonText?: string;
}

export interface IModalAskProps {
  title: string;
  descriptionText: string;

  typeLeft?: IButtonTypes;
  textLeft?: string;

  onPressRight(): void;
  typeRight?: IButtonTypes;
  textRight?: string;

  overlayStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

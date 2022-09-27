import {ITextInputProps} from '@npm/mobydick-core';
import {StyleProp, ViewStyle} from 'react-native';

export interface IVerificationProps extends ITextInputProps {
  maxLength?: number;
  editable?: boolean;
  secureTextEntry?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
}

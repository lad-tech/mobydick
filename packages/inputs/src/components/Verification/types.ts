import {ITextInputProps} from '@npm/mobydick-core';
import {StyleProp, ViewStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

export interface ICodeFieldProps extends ITextInputProps {
  maxLength?: number;
  editable?: boolean;
  secureTextEntry?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  onChangeText?(text: string): void;
  onBackKeyPress?(): void;
  fontStyleCodeField?: TypographyProp;
}

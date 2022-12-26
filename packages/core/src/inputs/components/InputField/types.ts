import {ReactElement} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {ITextInputProps} from '../../../basic/components/TextInput/types';
import {SimpleIconName} from '../../../styles/icons/font/SimpleIcon';
import {IStyledTextProps} from '../../../typography/types';
import {IInputsTypes} from '../types';

export interface IInputFieldsProps extends ITextInputProps {
  title?: string;
  titleProps?: IStyledTextProps;
  required?: boolean;
  subtitle?: string;
  subtitleIcon?: SimpleIconName | undefined;
  subtitleProps?: IStyledTextProps;
  containerStyle?: StyleProp<ViewStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: ReactElement;
  type?: IInputsTypes;
  disabled?: boolean;
}

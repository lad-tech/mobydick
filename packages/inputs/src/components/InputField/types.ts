import {ITextInputProps} from '@npm/mobydick-core';
import {ReactElement} from 'react';
import {IStyledTextProps} from '@npm/mobydick-typography';
import {StyleProp, ViewStyle} from 'react-native';

import {ITypes} from '../types';

export interface IInputFieldsProps extends ITextInputProps {
  title?: string;
  titleProps?: IStyledTextProps;
  subtitle?: string;
  subtitleProps?: IStyledTextProps;
  containerStyle?: StyleProp<ViewStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: ReactElement;
  type?: ITypes;
  disabled?: boolean;
}

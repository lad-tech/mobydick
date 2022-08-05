import {ITextInputProps} from '@npm/mobydick-core';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ReactElement} from 'react';

export interface ISearchProps extends ITextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  textInputContainerStyle?: StyleProp<TextStyle>;
  leftIcon?: ReactElement;
}

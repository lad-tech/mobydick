import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ReactElement} from 'react';

import {ITextInputProps} from '../../../basic/components/TextInput/types';

export interface ISearchProps extends ITextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  textInputContainerStyle?: StyleProp<TextStyle>;
  leftIcon?: ReactElement;
}

import {ReactElement} from 'react';
import {StyleProp, TextProps, TextStyle} from 'react-native';

import {ITouchableOpacityProps} from '../../../basic/components/TouchableOpacity/types';
import {TypographyProp} from '../../../typography/types';

type IProps = {
  type?: IButtonTypes;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  font?: TypographyProp | undefined;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  loading?: boolean;
  size?: IButtonSize;
  count?: number;
  textProps?: TextProps;
};

export enum IButtonTypes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  disabled = 'disabled',
  loading = 'loading',
  destructive = 'destructive',
}

export enum IButtonSize {
  large = 'large',
  small = 'small',
  fixed = 'fixed',
}

export type IButtonProps = ITouchableOpacityProps & IProps;

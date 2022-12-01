import {ITouchableOpacityProps} from '@npm/mobydick-core';
import {ReactElement} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

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

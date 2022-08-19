import {ITouchableOpacityProps} from '@npm/mobydick-core';
import {ReactElement} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {TypographyProp} from '@npm/mobydick-typography';

interface IButtonProps {
  type?: ITypes;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  font?: TypographyProp | undefined;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  loading?: boolean;
  size?: ISize;
}

export enum ITypes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  disabled = 'disabled',
  loading = 'loading',
  destructive = 'destructive',
}

export enum ISize {
  large = 'large',
  small = 'small',
  fixed = 'fixed',
}

export type ButtonProps = ITouchableOpacityProps & IButtonProps;

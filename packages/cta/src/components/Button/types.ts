import {TouchableOpacityProps} from '@npm/mobydick-core';
import {ReactElement} from 'react';

interface IButtonProps {
  type?: ITypes;
  text?: string;
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
}

export enum ISize {
  large = 'large',
  small = 'small',
  fixed = 'fixed',
}

export type ButtonProps = TouchableOpacityProps & IButtonProps;

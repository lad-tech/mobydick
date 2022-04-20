import {TouchableOpacityProps} from '@mobydick/core';
import {ReactElement} from 'react';

interface IButtonProps {
  type?: ITypes;
  text?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  loading?: boolean;
}

export enum ITypes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  disabled = 'disabled',
  loading = 'loading',
}
export type ButtonProps = TouchableOpacityProps & IButtonProps;

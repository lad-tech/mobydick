import {ReactElement} from 'react';
import {StyleProp, TextProps, TextStyle} from 'react-native';

import {ITouchableOpacityProps} from '../../../basic/components/TouchableOpacity/types';
import {TypographyProp} from '../../../typography/types';

export enum IStateBtn {
  danger = 'danger',
  default = 'default',
  disabled = 'disabled',
}

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
  state?: IStateBtn;
};

export enum IButtonTypes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',

  /** @deprecated use loading **/
  loading = 'loading',
  /** @deprecated use disabled **/
  disabled = 'disabled',
  /** @deprecated use destructive **/
  destructive = 'destructive',
}

export enum IButtonSize {
  large = 'large',
  small = 'small',
  fixed = 'fixed',
}

export type IButtonProps = ITouchableOpacityProps & IProps;

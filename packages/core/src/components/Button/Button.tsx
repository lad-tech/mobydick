import React, {FC} from 'react';
import {
  Button as DefaultButton,
  ButtonProps as DefaultButtonProps,
} from 'react-native';
type ButtonProps = DefaultButtonProps;

const Button: FC<ButtonProps> = props => {
  return <DefaultButton {...props} />;
};
export default Button;

import React, {FC} from 'react';
import {Button as DefaultButton} from 'react-native';

import {ButtonProps} from './types';

const Button: FC<ButtonProps> = props => {
  return <DefaultButton {...props} />;
};
export default Button;

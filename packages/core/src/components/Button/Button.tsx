import React, {forwardRef} from 'react';
import {Button as DefaultButton} from 'react-native';

import {IButtonProps, IButton} from './types';

const Button = forwardRef<IButton, IButtonProps>((props, ref) => {
  return <DefaultButton ref={ref} {...props} />;
});
export default Button;

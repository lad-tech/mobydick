import {forwardRef} from 'react';
import {Button as DefaultButton} from 'react-native';

import {IButtonWrapperProps, IButtonWrapper} from './types';

const ButtonWrapper = forwardRef<IButtonWrapper, IButtonWrapperProps>(
  (props, ref) => {
    return <DefaultButton ref={ref} {...props} />;
  },
);
export default ButtonWrapper;

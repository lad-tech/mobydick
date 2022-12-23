import React, {forwardRef} from 'react';
import {View as DefaultView} from 'react-native';

import {IView, IViewProps} from './types';

const View = forwardRef<IView, IViewProps>((props, ref) => (
  <DefaultView ref={ref} {...props} />
));

export default View;

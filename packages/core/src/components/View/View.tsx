import React, {FC} from 'react';
import {View as DefaultView} from 'react-native';

import {ViewProps} from './types';

const View: FC<ViewProps> = props => {
  return <DefaultView {...props} />;
};

export default View;

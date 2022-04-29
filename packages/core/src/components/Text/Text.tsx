import React, {FC} from 'react';
import {Text as DefaultText} from 'react-native';

import {TextProps} from './types';

const Text: FC<TextProps> = props => {
  return <DefaultText {...props} />;
};
export default Text;

import {LoaderS, LoaderM, LoaderL, useTheme} from '@npm/mobydick-styles';
import React, {FC} from 'react';
import {Color} from 'react-native-svg';

import {ISizeSpinner, LoaderProps} from './types';

const Loader: FC<LoaderProps> = props => {
  const {size, fill, ...otherProps} = props;
  const {colors} = useTheme();

  const getSize = (size: ISizeSpinner, color: Color) => {
    switch (size) {
      case ISizeSpinner.S:
        return <LoaderS fill={color} {...otherProps} />;
      case ISizeSpinner.M:
        return <LoaderM fill={color} {...otherProps} />;
      case ISizeSpinner.L:
        return <LoaderL fill={color} {...otherProps} />;
    }
  };

  return getSize(size, fill || colors.ElementBase);
};

export default Loader;

import React, {FC} from 'react';
import {FillProps} from 'react-native-svg';

import {Loader as LoaderSVG} from '../../../styles';
import useTheme from '../../../styles/theme/hooks/useTheme';

import {ISizeSpinner, LoaderProps} from './types';

const Loader: FC<LoaderProps> = props => {
  const {size, fill, ...otherProps} = props;
  const {colors} = useTheme();

  const getSize = (color: NonNullable<FillProps['fill']>) => {
    switch (size) {
      case ISizeSpinner.XXS:
        return (
          <LoaderSVG fill={color} width="20" height="20" {...otherProps} />
        );
      case ISizeSpinner.S:
        return (
          <LoaderSVG fill={color} width="26" height="26" {...otherProps} />
        );
      case ISizeSpinner.M:
        return (
          <LoaderSVG fill={color} width="32" height="32" {...otherProps} />
        );
      case ISizeSpinner.L:
        return (
          <LoaderSVG fill={color} width="48" height="48" {...otherProps} />
        );
      default:
        return (
          <LoaderSVG fill={color} width="24" height="24" {...otherProps} />
        );
    }
  };

  return getSize(fill || colors.ElementBase);
};

export default Loader;

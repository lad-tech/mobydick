import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import {IPopup} from '../../types';
import {PopupBase} from '../PopupBase';

import Title from './Title';
import stylesCreate from './stylesCreate';

const SnackbarBase: FC<
  Omit<IPopup, 'Content'> & {
    onClose: () => void;
    containerStyle?: StyleProp<ViewStyle>;
  }
> & {Title: typeof Title} = props => {
  const {children, onClose, containerStyle, overlayStyle} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <PopupBase
      onClose={onClose}
      overlayStyle={[styles.overlayStyle, overlayStyle]}>
      <View style={[styles.container, containerStyle]}>{children}</View>
    </PopupBase>
  );
};

SnackbarBase.Title = Title;
export default SnackbarBase;

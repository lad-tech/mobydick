import React, {FC} from 'react';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import {StyleProp, ViewStyle} from 'react-native';

import stylesCreate from '../PopupBase/stylesCreate';
import {PopupBase} from '../PopupBase';
import {IPopup} from '../../types';

import CloseIcon from './CloseIcon';
import DescriptionText from './DescriptionText';
import Title from './Title';

const ModalBase: FC<
  Omit<IPopup, 'Content'> & {
    onClose: () => void;
    containerStyle?: StyleProp<ViewStyle>;
  }
> & {
  Title: typeof Title;
  CloseIcon: typeof CloseIcon;
  DescriptionText: typeof DescriptionText;
} = props => {
  const {children, overlayStyle, onClose, containerStyle} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <PopupBase onClose={onClose} overlayStyle={overlayStyle}>
      <View style={[styles.container, containerStyle]}>{children}</View>
    </PopupBase>
  );
};

ModalBase.Title = Title;
ModalBase.DescriptionText = DescriptionText;
ModalBase.CloseIcon = CloseIcon;
export default ModalBase;

import React, {FC} from 'react';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import {StyleProp, ViewStyle} from 'react-native';

import stylesCreate from '../PopupBase/stylesCreate';
import {PopupBase} from '../PopupBase';
import {IPopup} from '../../types';
import {returnTrue} from '../../functions';

import CloseIcon from './CloseIcon';
import DescriptionText from './DescriptionText';
import Title from './Title';
import HorizontalButtonsView from './HorizontalButtonsView';
import AlertContent from './AlertContent';
import VerticalButton from './VerticalButton';
import ImageView from './ImageView';

const ModalBase: FC<
  Omit<IPopup, 'Content'> & {
    onClose: () => void;
    containerStyle?: StyleProp<ViewStyle>;
  }
> & {
  Title: typeof Title;
  CloseIcon: typeof CloseIcon;
  DescriptionText: typeof DescriptionText;
  HorizontalButtonsView: typeof HorizontalButtonsView;
  VerticalButton: typeof VerticalButton;
  AlertContent: typeof AlertContent;
  ImageView: typeof ImageView;
} = props => {
  const {children, overlayStyle, onClose, containerStyle} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <PopupBase onClose={onClose} overlayStyle={overlayStyle}>
      <View
        style={[styles.container, containerStyle]}
        onStartShouldSetResponder={returnTrue}>
        {children}
      </View>
    </PopupBase>
  );
};

ModalBase.Title = Title;
ModalBase.DescriptionText = DescriptionText;
ModalBase.CloseIcon = CloseIcon;
ModalBase.HorizontalButtonsView = HorizontalButtonsView;
ModalBase.AlertContent = AlertContent;
ModalBase.VerticalButton = VerticalButton;
ModalBase.ImageView = ImageView;
export default ModalBase;

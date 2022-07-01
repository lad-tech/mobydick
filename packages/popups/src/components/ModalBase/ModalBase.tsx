import React, {FC} from 'react';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import stylesCreate from '@npm/mobydick-popups/src/components/PopupBase/stylesCreate';
import {IPopup, PopupBase} from '@npm/mobydick-popups';

import CloseIcon from './CloseIcon';
import DescriptionText from './DescriptionText';
import Title from './Title';

const ModalBase: FC<Omit<IPopup, 'Content'> & {onClose: () => void}> & {
  Title: typeof Title;
  CloseIcon: typeof CloseIcon;
  DescriptionText: typeof DescriptionText;
} = props => {
  const {children, overlayStyle, onClose} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <PopupBase onClose={onClose} overlayStyle={overlayStyle}>
      <View style={[styles.container]}>{children}</View>
    </PopupBase>
  );
};

ModalBase.Title = Title;
ModalBase.DescriptionText = DescriptionText;
ModalBase.CloseIcon = CloseIcon;
export default ModalBase;

import React, {FC} from 'react';
import {Pressable} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import usePopups from '../../hooks/usePopups';

import {IPopupProps} from './types';
import stylesCreate from './stylesCreate';

const PopupBase: FC<IPopupProps> = ({
  id,
  isVisible,
  children,
  overlayStyle,
}) => {
  const [styles] = useStyles(stylesCreate);
  const popupContext = usePopups();

  const onClose = () => {
    popupContext.closePopup(id);
  };

  if (!isVisible) return null;

  return (
    <Pressable
      style={[styles.overlay, overlayStyle]}
      onPress={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}>
      {children}
    </Pressable>
  );
};

export default PopupBase;

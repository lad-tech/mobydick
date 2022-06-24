import React, {FC} from 'react';
import {View, Text, Pressable} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import {Button} from '@npm/mobydick-cta';

import usePopups from '../../hooks/usePopups';

import {IPopupProps} from './types';
import stylesCreate from './stylesCreate';

const PopupBase: FC<IPopupProps> = ({
  title,
  id,
  isVisible,
  style,
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
      {title && (
        <View style={[styles.container, style]}>
          <Text>{title}</Text>
          <Button onPress={onClose} text={'close'} />
        </View>
      )}
      {children}
    </Pressable>
  );
};

export default PopupBase;

import React, {FC} from 'react';
import {View, Text, Pressable} from '@mobydick/core';
import {useStyles} from '@mobydick/styles';
import {Button} from '@mobydick/cta';

import usePopups from '../../hooks/usePopups';

import {IPopupProps} from './types';
import stylesCreate from './stylesCreate';

const PopupBase: FC<IPopupProps> = ({
  title,
  id,
  isVisible,
  style,
  children,
}) => {
  const [styles] = useStyles(stylesCreate);
  const popupContext = usePopups();

  const onClose = () => {
    popupContext.closePopup(id);
  };

  if (!isVisible) return null;

  return (
    <Pressable
      style={styles.overlay}
      onPress={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}>
      <View style={[styles.container, style]}>
        <Text>{title}</Text>
        <Button onPress={onClose} text={'close'} />

        {children}
      </View>
    </Pressable>
  );
};

export default PopupBase;

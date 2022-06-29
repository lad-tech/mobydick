import React, {FC} from 'react';
import {Pressable} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import Constants from '@npm/mobydick-popups/src/components/PopupBase/constants';

import usePopups from '../../hooks/usePopups';

import {IPopupProps} from './types';
import stylesCreate from './stylesCreate';

const PopupBase: FC<IPopupProps> = ({id, Content, overlayStyle}) => {
  const [styles] = useStyles(stylesCreate);
  const popupContext = usePopups();

  const onClose = () => {
    popupContext.closePopup(id);
  };

  return (
    <Pressable
      style={[styles.overlay, overlayStyle]}
      testID={Constants.testID}
      onPress={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}>
      <Content onClose={onClose} id={id} />
    </Pressable>
  );
};

export default PopupBase;

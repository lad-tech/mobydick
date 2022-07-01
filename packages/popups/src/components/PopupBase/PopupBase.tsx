import React, {FC} from 'react';
import {Pressable} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import Constants from './constants';
import {IPopupProps} from './types';
import stylesCreate from './stylesCreate';

const PopupBase: FC<IPopupProps> = ({onClose, children, overlayStyle}) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <Pressable
      style={[styles.overlay, overlayStyle]}
      testID={Constants.testID}
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

import React, {FC, useEffect} from 'react';
import {Pressable} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import {BackHandler} from 'react-native';

import Constants from './constants';
import {IPopupProps} from './types';
import stylesCreate from './stylesCreate';

const PopupBase: FC<IPopupProps> = ({onClose, children, overlayStyle}) => {
  const [styles] = useStyles(stylesCreate);

  useEffect(() => {
    const onBackPress = () => {
      onClose();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);

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

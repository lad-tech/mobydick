import React, {FC, PropsWithChildren, useEffect} from 'react';
import {BackHandler} from 'react-native';

import useStyles from '../../../styles/theme/hooks/useStyles';
import Pressable from '../../../basic/components/Pressable/Pressable';

import Constants from './constants';
import {IPopupProps} from './types';
import stylesCreate from './stylesCreate';

const PopupBase: FC<PropsWithChildren<IPopupProps>> = ({
  onClose,
  children,
  overlayStyle,
}) => {
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

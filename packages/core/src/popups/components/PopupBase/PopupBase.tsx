import {FC, PropsWithChildren, useCallback, useEffect} from 'react';
import {BackHandler, GestureResponderEvent} from 'react-native';

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

  const onPressClickOut = useCallback(
    (event: GestureResponderEvent) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <Pressable
      style={[styles.overlay, overlayStyle]}
      testID={Constants.testID}
      onPress={onPressClickOut}>
      {children}
    </Pressable>
  );
};

export default PopupBase;

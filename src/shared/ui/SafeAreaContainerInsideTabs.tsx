import {forwardRef, useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Keyboard, Platform, View, ViewProps} from 'react-native';

import {useStyles} from '@lad-tech/mobydick-core';
import getScreenStyles from '@/shared/styles/getScreenStyles';

const SafeAreaContainerInsideTabs = forwardRef<View, ViewProps>(
  ({style, ...rest}, ref) => {
    const [styles] = useStyles(getScreenStyles);

    const insets = useSafeAreaInsets();
    const [isKeyboardShown, setKeyboardShown] = useState(false);

    useEffect(() => {
      const didShowListener = Keyboard.addListener(
        Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
        () => {
          setKeyboardShown(true);
        },
      );

      const didHideListener = Keyboard.addListener(
        Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
        () => {
          setKeyboardShown(false);
        },
      );

      return () => {
        didShowListener.remove();
        didHideListener.remove();
      };
    }, []);

    return (
      <View
        ref={ref}
        style={[
          styles.container,
          {
            paddingBottom:
              Platform.OS === 'android' && isKeyboardShown ? insets.bottom : 0,
          },
          style,
        ]}
        {...rest}
      />
    );
  },
);

export default SafeAreaContainerInsideTabs;

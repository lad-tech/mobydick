import {forwardRef, useEffect, useMemo, useState} from 'react';
import {
  SafeAreaViewProps,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Keyboard, Platform, View, ViewStyle} from 'react-native';
import {Edge} from 'react-native-safe-area-context/src/SafeArea.types';

import {useStyles} from '@lad-tech/mobydick-core';
import getScreenStyles from '@/shared/styles/getScreenStyles';

const SafeAreaContainer = forwardRef<
  View,
  SafeAreaViewProps & {edges?: Edge[]}
>(({style, edges, ...rest}, ref) => {
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

  const insetsStyle = useMemo(() => {
    const paddings = edges
      ? edges.reduce((acc, edge) => {
          if (edge === 'top') {
            acc.paddingTop = insets.top;
          }

          if (edge === 'bottom') {
            acc.paddingBottom = insets.bottom;
          }

          return acc;
        }, {} as ViewStyle)
      : {
          paddingBottom: insets.top,
        };

    return {
      ...paddings,
      paddingBottom:
        Platform.OS === 'ios' && isKeyboardShown ? 0 : paddings.paddingBottom,
    };
  }, [edges, isKeyboardShown, insets.top, insets.bottom]);

  console.log(styles.container, insetsStyle, isKeyboardShown);
  return (
    <View ref={ref} style={[styles.container, insetsStyle, style]} {...rest} />
  );
});

export default SafeAreaContainer;

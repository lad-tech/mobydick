import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';

import {useThrottle} from '@npm/mobydick-utils';
import {
  Button,
  HIT_SLOP,
  IButtonProps,
  IThemeContext,
  Pressable,
  Typography,
  useTheme,
  View,
} from '@npm/mobydick-core';
import useStyles from '@npm/mobydick-core/src/styles/theme/hooks/useStyles';

const ButtonWithDelay = ({
  onPress = () => {
    console.log('biba');
  },
  ...otherProps
}: IButtonProps) => {
  const {throttledFn} = useThrottle(onPress);
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();

  const getStyle = useCallback(
    ({pressed}) => [
      {
        backgroundColor: pressed ? colors.BgError : colors.BgPrimary,
      },
    ],
    [],
  );
  return (
    <>
      <Button
        onPress={throttledFn}
        text={'biba'}
        style={{marginVertical: 10}}
        {...otherProps}
      />
      <View
        style={[
          styles.button,
          {
            paddingVertical: 10,
          },
        ]}>
        <Pressable style={getStyle} hitSlop={HIT_SLOP.small}>
          <Typography>{'HIT_SLOP.small'}</Typography>
        </Pressable>
      </View>
      <View
        style={[
          styles.button,
          {
            paddingVertical: 20,
          },
        ]}>
        <Pressable style={getStyle} hitSlop={HIT_SLOP.medium}>
          <Typography>{'HIT_SLOP.medium'}</Typography>
        </Pressable>
      </View>
      <View
        style={[
          styles.button,
          {
            paddingVertical: 30,
          },
        ]}>
        <Pressable style={getStyle} hitSlop={HIT_SLOP.large}>
          <Typography>{'HIT_SLOP.large'}</Typography>
        </Pressable>
      </View>
    </>
  );
};

const stylesCreate = ({spaces, colors}: IThemeContext) =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.BgAccentSoft,
      marginVertical: spaces.Space4,
    },
  });

export default ButtonWithDelay;

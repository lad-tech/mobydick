import React from 'react';
import {StyleSheet} from 'react-native';
import {number} from '@storybook/addon-knobs';

import {
  IThemeContext,
  rem,
  SimpleIcon,
  useStyles,
  useTheme,
  View,
} from '@lad-tech/mobydick-core';

const ShadowExample = () => {
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();
  const elevation = number('android elevation', 1);
  const shadowOpacity = number('ios shadowOpacity', 0.5);
  const shadowRadius = number('ios shadowRadius', 4.27);
  const heightShadowOffset = number('ios shadowOffset height', 1);
  const widthShadowOffset = number('ios shadowOffset width', 0);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.shadow,
          styles.box,
          {
            elevation,
            shadowOpacity,
            shadowRadius,
            shadowOffset: {
              width: widthShadowOffset,
              height: heightShadowOffset,
            },
          },
        ]}
      />
      <View
        style={[
          styles.shadow,
          styles.box,
          {borderRadius: rem(20)},
          {
            elevation,
            shadowOpacity,
            shadowRadius,
            shadowOffset: {
              width: widthShadowOffset,
              height: heightShadowOffset,
            },
          },
        ]}
      />
      <View
        style={[
          styles.shadow,
          styles.circle,
          {
            elevation,
            shadowOpacity,
            shadowRadius,
            shadowOffset: {
              width: widthShadowOffset,
              height: heightShadowOffset,
            },
          },
        ]}
      />
      <View
        style={[
          styles.shadow,
          {
            elevation,
            shadowOpacity,
            shadowRadius,
            shadowOffset: {
              width: widthShadowOffset,
              height: heightShadowOffset,
            },
          },
        ]}>
        <SimpleIcon
          name={'icon-starfill'}
          size={100}
          color={colors.BgPrimary}
        />
      </View>
    </View>
  );
};

const stylesCreate = ({colors, spaces}: IThemeContext) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    shadow: {
      marginVertical: spaces.Space10,
      backgroundColor: 'transparent',
    },
    box: {
      width: rem(200),
      height: rem(100),
      backgroundColor: colors.BgPrimary,
    },
    circle: {
      width: rem(100),
      height: rem(100),
      borderRadius: rem(50),
      backgroundColor: colors.BgPrimary,
    },
  });

export default ShadowExample;

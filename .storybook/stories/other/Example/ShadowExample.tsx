import React from 'react';
import {StyleSheet} from 'react-native';

import {
  IThemeContext,
  rem,
  SimpleIcon,
  useStyles,
  useTheme,
  View,
} from '@lad-tech/mobydick-core';

const ShadowExample = ({
  elevation,
  shadowOpacity,
  shadowRadius,
  heightShadowOffset,
  widthShadowOffset,
}: {
  elevation: number;
  shadowOpacity: number;
  shadowRadius: number;
  heightShadowOffset: number;
  widthShadowOffset: number;
}) => {
  const [styles] = useStyles(stylesCreate);
  const {colors} = useTheme();
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

import React from 'react';
import {StyleSheet, Animated} from 'react-native';

import {IThemeContext} from '../../../styles';
import useStyles from '../../../styles/theme/hooks/useStyles';

const Thumb = ({size}: {size: Animated.Value}) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <Animated.View
      style={[
        styles.root,
        {
          width: size,
          height: size,
          borderRadius: size,
        },
      ]}
    />
  );
};

const stylesCreate = ({colors, spaces}: IThemeContext) => {
  return StyleSheet.create({
    root: {
      borderWidth: spaces.Space2,
      borderColor: colors.IconMuted,
      backgroundColor: colors.BgPrimary,
    },
  });
};

export default Thumb;

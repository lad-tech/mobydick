import {ImageStyle, StyleSheet} from 'react-native';

import {IThemeContext, rem} from '../../../styles';

import {ISizeAvatar} from './types';

const stylesCreate = (
  theme: IThemeContext,
  size: ISizeAvatar,
  backgroundColor?: string,
) => {
  const {spaces, colors} = theme;

  const getSizeStyles = (sizeAvatar: ISizeAvatar): ImageStyle => {
    switch (sizeAvatar) {
      case ISizeAvatar.S:
        return {
          width: spaces.Space24,
          height: spaces.Space24,
          borderRadius: spaces.Space12,
        };
      case ISizeAvatar.M:
        return {
          width: spaces.Space40,
          height: spaces.Space40,
          borderRadius: spaces.Space20,
        };
      case ISizeAvatar.L:
        return {
          width: rem(60),
          height: rem(60),
          borderRadius: rem(30),
        };
      case ISizeAvatar.XL:
        return {
          width: rem(80),
          height: rem(80),
          borderRadius: rem(40),
        };
    }
  };

  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor || colors.ElementBase,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      ...getSizeStyles(size),
    },
    image: {
      ...getSizeStyles(size),
    },
  });
};
export default stylesCreate;

import {ImageStyle, StyleSheet} from 'react-native';

import {IThemeContext, rem} from '../../../styles';

import {IAvatarSize} from './types';

const stylesCreate = (
  theme: IThemeContext,
  size: IAvatarSize,
  backgroundColor?: string,
) => {
  const {spaces, colors} = theme;

  const getSizeStyles = (sizeAvatar: IAvatarSize): ImageStyle => {
    switch (sizeAvatar) {
      case IAvatarSize.S:
        return {
          width: spaces.Space24,
          height: spaces.Space24,
          borderRadius: spaces.Space12,
        };
      case IAvatarSize.M:
        return {
          width: spaces.Space40,
          height: spaces.Space40,
          borderRadius: spaces.Space20,
        };
      case IAvatarSize.L:
        return {
          width: rem(60),
          height: rem(60),
          borderRadius: rem(30),
        };
      case IAvatarSize.XL:
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
      borderWidth: spaces.Space1,
      borderColor: colors.BgPrimary,
      ...getSizeStyles(size),
    },
    image: {
      borderWidth: spaces.Space1,
      borderColor: colors.BgPrimary,
      ...getSizeStyles(size),
    },
  });
};
export default stylesCreate;

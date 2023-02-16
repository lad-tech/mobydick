import {ImageStyle, StyleSheet} from 'react-native';

import {defaultSpaces, IThemeContext, rem} from '../../../styles';

import {IAvatarSize} from './types';

const getSizeStyles = (
  sizeAvatar: IAvatarSize,
  spaces: typeof defaultSpaces,
): ImageStyle => {
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

const stylesCreate = (
  theme: IThemeContext,
  size: IAvatarSize,
  backgroundColor?: string,
  border?: boolean,
) => {
  const {spaces, colors} = theme;

  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor || colors.ElementBase,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: border ? spaces.Space2 : 0,
      borderColor: colors.BgPrimary,
      ...getSizeStyles(size, spaces),
    },
    image: {
      borderWidth: border ? spaces.Space2 : 0,
      borderColor: colors.BgPrimary,
      ...getSizeStyles(size, spaces),
    },
  });
};
export default stylesCreate;

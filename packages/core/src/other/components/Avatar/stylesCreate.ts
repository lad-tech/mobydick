import {ImageStyle, StyleSheet} from 'react-native';

import {IThemeContext, rem} from '../../../styles';

import {IAvatarSize} from './types';

const getSizeStyles = (sizeAvatar: IAvatarSize): ImageStyle => {
  switch (sizeAvatar) {
    case IAvatarSize.S:
      return {
        width: rem(24),
        height: rem(24),
        borderRadius: rem(12),
      };
    case IAvatarSize.M:
      return {
        width: rem(40),
        height: rem(40),
        borderRadius: rem(20),
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
const getBorderStyles = (color: string, border?: boolean) => {
  return (
    border && {
      borderWidth: rem(2),
      borderColor: color,
    }
  );
};

const stylesCreate = (
  theme: IThemeContext,
  size: IAvatarSize,
  backgroundColor?: string,
  border?: boolean,
) => {
  const {colors} = theme;

  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor || colors.ElementBase,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',

      ...getSizeStyles(size),
      ...getBorderStyles(colors.BgPrimary, border),
    },
    image: {
      ...getSizeStyles(size),
      ...getBorderStyles(colors.BgPrimary, border),
    },
  });
};
export default stylesCreate;

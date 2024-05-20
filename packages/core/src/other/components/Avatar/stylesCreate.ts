import {ImageStyle} from 'react-native';

import {createStyles} from '../../../styles';
import px from '../../../styles/utils/px';

import {IAvatarSize} from './types';

const getSizeStyles = (sizeAvatar: IAvatarSize): ImageStyle => {
  switch (sizeAvatar) {
    case IAvatarSize.S:
      return {
        width: px(24),
        height: px(24),
        borderRadius: px(12),
      };
    case IAvatarSize.M:
      return {
        width: px(40),
        height: px(40),
        borderRadius: px(20),
      };
    case IAvatarSize.L:
      return {
        width: px(60),
        height: px(60),
        borderRadius: px(30),
      };
    case IAvatarSize.XL:
      return {
        width: px(80),
        height: px(80),
        borderRadius: px(40),
      };
  }
};
const getBorderStyles = (color: string, border?: boolean) => {
  return (
    border && {
      borderWidth: px(2),
      borderColor: color,
    }
  );
};

const stylesCreate = createStyles(
  ({colors}, size: IAvatarSize, border?: boolean) => ({
    container: {
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
  }),
);

export default stylesCreate;

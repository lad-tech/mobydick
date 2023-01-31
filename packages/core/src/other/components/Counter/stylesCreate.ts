import {StyleSheet} from 'react-native';

import rem from '../../../styles/spaces/rem';
import {IThemeContext} from '../../../styles/theme/types';

import {ICounterSize, ICounterTypes} from './types';

const stylesCreate = (
  {colors, spaces}: IThemeContext,
  size: ICounterSize,
  type?: ICounterTypes,
) => {
  const isMedium = size === ICounterSize.medium;
  const defaultSize = isMedium ? spaces.Space24 : rem(18);

  const getBackgroundColor = () => {
    if (type === ICounterTypes.tertiary) {
      return {backgroundColor: colors.ElementBase};
    } else {
      return {backgroundColor: colors.ElementWhite};
    }
  };

  const getColorText = () => {
    switch (type) {
      case ICounterTypes.primary:
      case ICounterTypes.secondary:
        return {color: colors.TextAccent};
      case ICounterTypes.destructive:
        return {color: colors.TextError};
      case ICounterTypes.disabled:
        return {color: colors.TextMuted};
      default:
        return {color: colors.TextWhite};
    }
  };

  return StyleSheet.create({
    badge: {
      position: 'absolute',
      zIndex: 1,
      alignSelf: 'center',
      minWidth: defaultSize,
      height: defaultSize,
      borderRadius: defaultSize / 2,
      alignItems: 'center',
      justifyContent: 'center',
      ...getBackgroundColor(),
    },
    notification: {
      position: 'absolute',
      zIndex: 1,
      borderColor: colors.BgPrimary,
      minWidth: spaces.Space8,
      height: spaces.Space8,
      borderRadius: spaces.Space8 / 2,
      borderWidth: spaces.Space1,
      backgroundColor: colors.ElementAttention,
    },
    text: {
      textAlign: 'center',
      paddingHorizontal: isMedium ? spaces.Space6 : spaces.Space4,
      ...getColorText(),
    },
  });
};

export default stylesCreate;

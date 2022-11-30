import {IThemeContext, rem} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

import {ICounterSize, ICounterTypes} from './types';

const stylesCreate = (
  {colors, spaces}: IThemeContext,
  size: ICounterSize,
  type?: ICounterTypes,
) => {
  const defaultSize = size === ICounterSize.medium ? spaces.Space24 : rem(18);

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
    text: {
      paddingHorizontal: spaces.Space6,
      ...getColorText(),
    },
  });
};

export default stylesCreate;

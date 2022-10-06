import {IThemeContext} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

import {IPosition} from '../../types';

const stylesCreate = (theme: IThemeContext, position?: IPosition) => {
  const {colors, spaces} = theme;

  const positionStyle = () => {
    switch (position) {
      case IPosition.top:
        return {
          top: -spaces.Space8,
          borderBottomWidth: spaces.Space8,
          borderRightWidth: spaces.Space8,
          borderTopWidth: 0,
          borderLeftWidth: spaces.Space8,
          borderBottomColor: colors.BgContrast,
          borderRightColor: 'transparent',
          borderTopColor: 'transparent',
          borderLeftColor: 'transparent',
        };
      case IPosition.bottom:
      default:
        return {
          bottom: -spaces.Space8,
          borderTopWidth: spaces.Space8,
          borderRightWidth: spaces.Space8,
          borderBottomWidth: 0,
          borderLeftWidth: spaces.Space8,
          borderTopColor: colors.BgContrast,
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
          borderLeftColor: 'transparent',
        };
    }
  };
  return StyleSheet.create({
    container: {
      backgroundColor: colors.BgContrast,
      paddingVertical: spaces.Space8,
      paddingHorizontal: spaces.Space16,
      borderRadius: spaces.Space8,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      marginVertical: spaces.Space8,
      position: 'absolute',
    },
    arrow: {
      position: 'absolute',
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
    },
    title: {
      zIndex: 1,
    },
    descriptionText: {
      zIndex: 1,
      paddingBottom: spaces.Space8,
    },
    positionStyle: {
      ...positionStyle(),
    },
  });
};

export default stylesCreate;

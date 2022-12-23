import {StyleSheet} from 'react-native';

import {IThemeContext} from '../../../styles/theme/types';
import {IPosition} from '../../types';

const stylesCreate = (theme: IThemeContext, placement?: IPosition) => {
  const {colors} = theme;

  const placementStyle = () => {
    switch (placement) {
      case IPosition.top:
        return {
          top: 20,
        };
      case IPosition.bottom:
      default:
        return {
          bottom: 10,
        };
    }
  };
  return StyleSheet.create({
    overlayStyle: {
      backgroundColor: 'transparent',
      position: 'absolute',
      width: '100%',
      flex: 1,
      alignItems: 'center',
      ...placementStyle(),
    },
    container: {
      backgroundColor: colors.BgContrast,
      borderRadius: theme.spaces.Space12,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: theme.spaces.Space20,
      paddingVertical: theme.spaces.Space16,
      margin: theme.spaces.Space20,
    },
    title: {
      flex: 1,
      paddingRight: theme.spaces.Space8,
    },
  });
};

export default stylesCreate;

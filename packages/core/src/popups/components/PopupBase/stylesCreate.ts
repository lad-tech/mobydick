import {StyleSheet} from 'react-native';

import {IThemeContext} from '../../../styles/theme/types';

const stylesCreate = (theme: IThemeContext) => {
  const {colors} = theme;
  return StyleSheet.create({
    overlay: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: colors.BgOverlay,
      alignItems: 'center',
    },
  });
};

export default stylesCreate;

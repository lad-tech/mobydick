import {StyleSheet} from 'react-native';

import {IThemeContext} from '../../styles/theme/types';
import rem from '../../styles/spaces/rem';

const stylesCreate = (theme: IThemeContext, disabled: boolean) => {
  const {colors, spaces} = theme;
  return StyleSheet.create({
    container: {
      width: rem(50),
      height: rem(30),
      borderRadius: spaces.Space20,
      padding: spaces.Space2,
      opacity: disabled ? 0.4 : 1,
    },
    switcher: {
      flex: 1,
      aspectRatio: 1,
      backgroundColor: colors.ElementWhite,
      borderRadius: rem(25),
    },
  });
};

export default stylesCreate;

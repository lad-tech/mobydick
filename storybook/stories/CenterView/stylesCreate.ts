import {StyleSheet} from 'react-native';

import {IThemeContext} from '@lad-tech/mobydick-core';

const stylesCreate = (theme: IThemeContext) =>
  StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.BgPrimary,
    },
    themeSwitcher: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
  });

export default stylesCreate;

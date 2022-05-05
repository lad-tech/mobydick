import {StyleSheet} from 'react-native';
import {useTheme} from '@mobydick/styles';

const stylesCreate = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    overlay: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: theme.BgOverlay,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: theme.BgPrimary,
      padding: 12,
    },
  });

export default stylesCreate;

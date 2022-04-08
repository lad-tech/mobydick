import {StyleSheet} from 'react-native';
import {useTheme} from '@mobydick/styles';

const styles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.BgSecondary,
      padding: 10, // TODO: Брать из темы, когда они будут готовы
      borderRadius: 8, // TODO: Брать из темы, когда они будут готовы
    },
  });
export default styles;

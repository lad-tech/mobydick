import {StyleSheet} from 'react-native';
import {useTheme} from '@mobydick/styles';

const styles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    textInput: {
      backgroundColor: theme.BgSecondary,
      padding: 10, // TODO: Брать из темы, когда они будут готовы
      borderRadius: 8, // TODO: Брать из темы, когда они будут готовы
      minWidth: 150, // Не уверен, что это нам надо
    },
    label: {
      marginBottom: 10, // TODO: Брать из темы, когда они будут готовы
    },
    underInputText: {
      color: theme.TextMuted,
      fontSize: 12, // TODO: Брать из темы, когда они будут готовы
    },
  });
export default styles;

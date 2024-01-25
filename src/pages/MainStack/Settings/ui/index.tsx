import {StyleSheet} from 'react-native';

import {
  Button,
  CurrentTheme,
  IThemeContext,
  useStyles,
  useTheme,
  View,
} from 'shared/ui';

const SettingsScreen = () => {
  const {currentTheme, setCurrentTheme} = useTheme();
  const [styles] = useStyles(createStylesFn);

  return (
    <View style={styles.container}>
      <Button
        text={currentTheme}
        disabled={false}
        onPress={() => {
          setCurrentTheme(
            currentTheme === CurrentTheme.light
              ? CurrentTheme.dark
              : CurrentTheme.light,
          );
        }}
      />
    </View>
  );
};

const createStylesFn = ({colors}: IThemeContext) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BgPrimary,
    },
  });
};

export default SettingsScreen;

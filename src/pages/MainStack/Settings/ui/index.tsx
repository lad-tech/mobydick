import {Button, CurrentTheme, useStyles, useTheme, View} from '@shared/ui';
import getScreenStyles from '@shared/styles/getScreenStyles';

const SettingsScreen = () => {
  const {currentTheme, setCurrentTheme} = useTheme();
  const [styles] = useStyles(getScreenStyles);

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

export default SettingsScreen;

import {useStyles, View} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {ShadowWidget} from 'widgets/Core/Styles/ui/ShadowWidget';
import {SimpleIconWidget} from 'widgets/Core/Styles/ui/SimpleIconWidget';

const StylesScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <ShadowWidget />
      <SimpleIconWidget />
    </View>
  );
};

export default StylesScreen;

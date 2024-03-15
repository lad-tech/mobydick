import {useStyles, View} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {ShadowWidget} from 'widgets/Core/Styles/ui/ShadowWidget';

const StylesScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <ShadowWidget />
    </View>
  );
};

export default StylesScreen;

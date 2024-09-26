import {useStyles, View} from '@/shared/ui';
import getScreenStyles from '@/shared/styles/getScreenStyles';

const UtilsScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return <View style={styles.container}></View>;
};

export default UtilsScreen;

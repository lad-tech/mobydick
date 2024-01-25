import {useStyles, View} from 'shared/ui';
import getScreenStyles from 'pages/lib/getScreenStyles';

const CoreScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return <View style={styles.container}></View>;
};

export default CoreScreen;

import {useStyles, View} from 'shared/ui';
import getScreenStyles from 'pages/lib/getScreenStyles';

const CalendarScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return <View style={styles.container}></View>;
};

export default CalendarScreen;

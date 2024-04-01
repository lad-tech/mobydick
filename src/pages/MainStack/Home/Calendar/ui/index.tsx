import {useStyles, View} from 'shared/ui';
import getScreenStyles from 'shared/styles/getScreenStyles';
import {CalendarWidget} from 'widgets/Calendar/ui/CalendarWidget';
import {ModalCalendarWidget} from 'widgets/Calendar/ui/ModalCalendarWidget';

const CalendarScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <View style={styles.container}>
      <CalendarWidget />
      <ModalCalendarWidget />
    </View>
  );
};

export default CalendarScreen;

import {CalendarWidget} from '@/widgets/Calendar/ui/CalendarWidget';
import {ModalCalendarWidget} from '@/widgets/Calendar/ui/ModalCalendarWidget';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const CalendarScreen = () => {
  return (
    <SafeAreaContainer>
      <CalendarWidget />
      <ModalCalendarWidget />
    </SafeAreaContainer>
  );
};

export default CalendarScreen;

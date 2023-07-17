import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {boolean, number, select, text} from '@storybook/addon-knobs';

import CenterView from '../CenterView';

import {Button, IButtonSize, usePopups, View} from '@lad-tech/mobydick-core';
import {
  IButtonView,
  IDateRange,
  ModalCalendar,
} from '@lad-tech/mobydick-calendar';
import {localeConfigRu} from '@lad-tech/mobydick-calendar/src/Calendar/localeConfig';

export const localeConfigEn = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'],
};

const CalendarPopupExample = () => {
  const popupContext = usePopups();
  const isShowLocaleConfigEn = boolean('is show locale config En', false);
  const initialDate = text('initial marked date', '2023-03-16');

  const onPress = () => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalCalendar
          onDateRangeChange={(date?: IDateRange) =>
            console.log('onChangeDate', date?.dateStart, date?.dateEnd)
          }
          onAcceptDateRangeChange={(date?: IDateRange) =>
            console.log(
              'onAcceptDateRangeChange',
              date?.dateStart,
              date?.dateEnd,
            )
          }
          descriptionText={text(
            'textCalendar',
            'Выберите интервал, в который хотите пойти в отпуск',
          )}
          buttonView={select('buttonView', IButtonView, IButtonView.large)}
          isShowToday={boolean('isShowToday', true)}
          localeConfig={isShowLocaleConfigEn ? localeConfigEn : localeConfigRu}
          isPeriod={boolean('isPeriod', true)}
          isCounter={boolean('isCounter', true)}
          initialRange={{
            fromDate: initialDate,
          }}
          initialDate={text('initial date', new Date().toString())}
          dottedDates={[
            new Date('2023-02-08'),
            new Date('2023-02-28'),
            new Date('2023-02-16'),
            new Date('2023-02-14'),
          ]}
          maxLengthDateRange={number('maxLengthDateRange', 30)}
          {...propsFromPopup}
        />
      ),
    });
  };
  return (
    <View>
      <Button text={'Нажми'} onPress={onPress} size={IButtonSize.large} />
    </View>
  );
};

storiesOf('Design System/Calendar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Calendar', () => <CalendarPopupExample />);

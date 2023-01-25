import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Button, IButtonSize, usePopups, View} from '@npm/mobydick-core';
import {IButtonView, IRangeDate, ModalCalendar} from '@npm/mobydick-calendar';
import {boolean, select, text} from '@storybook/addon-knobs';
import {localeConfigRu} from '@npm/mobydick-calendar/src/Calendar/localeConfig';

import CenterView from '../CenterView';

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
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
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
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

const CalendarPopupExample = () => {
  const popupContext = usePopups();
  const isShowLocaleConfigEn = boolean('is show locale config En', false);
  const onPress = () => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalCalendar
          onChangeDate={(date?: IRangeDate) =>
            console.log('onChangeDate', date?.dateStart, date?.dateEnd)
          }
          textCalendar={text(
            'textCalendar',
            'Выберите интервал, в который хотите пойти в отпуск',
          )}
          buttonView={select('buttonView', IButtonView, IButtonView.large)}
          isShowToday={boolean('isShowToday', false)}
          localeConfig={isShowLocaleConfigEn ? localeConfigEn : localeConfigRu}
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

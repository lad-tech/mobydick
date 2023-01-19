import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Button, IButtonSize, usePopups, View} from '@npm/mobydick-core';
import {IButtonView, IChangeDate, ModalCalendar} from '@npm/mobydick-calendar';
import {select, text} from '@storybook/addon-knobs';

import CenterView from '../CenterView';

const CalendarPopupExample = () => {
  const popupContext = usePopups();

  const onPress = () => {
    popupContext.openPopup({
      Content: propsFromPopup => (
        <ModalCalendar
          onChangeDate={(date?: IChangeDate) =>
            console.log('onChangeDate', date?.dateStart, date?.dateEnd)
          }
          textCalendar={text(
            'textCalendar',
            'Выберите интервал, в который хотите пойти в отпуск',
          )}
          buttonView={select('buttonView', IButtonView, IButtonView.large)}
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

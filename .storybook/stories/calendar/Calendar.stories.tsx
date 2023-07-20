import React from 'react';
import {Meta, StoryObj} from '@storybook/react-native';

import {Button, IButtonSize, usePopups, View} from '@lad-tech/mobydick-core';
import {
  IButtonView,
  IDateRange,
  IModalCalendar,
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

const CalendarPopupExample = ({
  isShowLocaleConfigEn,
  descriptionText,
  isShowToday,
  isCounter,
  isPeriod,
  initialDate,
  buttonView,
  maxLengthDateRange,
}: Required<IModalCalendar> & {
  isShowLocaleConfigEn: boolean;
  initialDate: string;
}) => {
  const popupContext = usePopups();

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
          descriptionText={descriptionText}
          buttonView={buttonView}
          isShowToday={isShowToday}
          localeConfig={isShowLocaleConfigEn ? localeConfigEn : localeConfigRu}
          isPeriod={isPeriod}
          isCounter={isCounter}
          initialRange={{
            fromDate: initialDate,
          }}
          initialDate={initialDate}
          dottedDates={[
            new Date('2023-02-08'),
            new Date('2023-02-28'),
            new Date('2023-02-16'),
            new Date('2023-02-14'),
          ]}
          maxLengthDateRange={maxLengthDateRange}
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

const meta: Meta<typeof CalendarPopupExample> = {
  title: 'Design System/Calendar',
  component: CalendarPopupExample,
  excludeStories: ['localeConfigEn'],
};

type Story = StoryObj<typeof CalendarPopupExample>;

export default meta;

export const Example = {
  args: {
    isShowLocaleConfigEn: true,
    initialDate: '2023-03-16',
    descriptionText: 'Выберите интервал, в который хотите пойти в отпуск',
    buttonView: IButtonView.large,
    isShowToday: true,
    isPeriod: true,
    isCounter: true,
    maxLengthDateRange: 30,
  },
  argTypes: {
    isShowLocaleConfigEn: {
      control: {
        type: 'boolean',
      },
    },
    initialDate: {
      control: {type: 'date'},
    },
    buttonView: {
      options: Object.values(IButtonView),
      control: {
        type: 'select',
      },
    },
    isShowToday: {
      control: {
        type: 'boolean',
      },
    },
    isPeriod: {
      control: {
        type: 'boolean',
      },
    },
    isCounter: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Story;

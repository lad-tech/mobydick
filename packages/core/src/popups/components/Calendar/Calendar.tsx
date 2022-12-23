import React, {FC, ReactElement, useMemo, useState} from 'react';
import {
  Calendar as DefaultCalendar,
  CalendarProps,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';

import useTheme from '../../../styles/theme/hooks/useTheme';
import useStyles from '../../../styles/theme/hooks/useStyles';
import rem from '../../../styles/spaces/rem';

import {localeConfigRu} from './localeConfig';
import {getAllDatesBetween, IMarkedTypes} from './functions';
import stylesCreate from './stylesCreate';
import {IChangeDate} from './types';

LocaleConfig.locales['ru'] = localeConfigRu;

interface ICalendar extends CalendarProps {
  onChangeDate?: (dateRange: IChangeDate) => void;
  bottomView?: ReactElement;
  defaultLocale?: string;
}
const Calendar: FC<ICalendar> = props => {
  const {onChangeDate, defaultLocale, bottomView, ...rest} = props;
  LocaleConfig.defaultLocale = defaultLocale || 'ru';
  const {colors, currentTheme, spaces} = useTheme();
  const today = new Date();
  const [styles] = useStyles(stylesCreate);
  const [date, setDate] = useState<DateData>();
  const colorsArg = useMemo(
    () => ({
      colorPrime: {
        color: colors.ElementBase,
        textColor: colors.TextWhite,
      },
      colorSoft: {
        color: colors.BgAccentSoft,
        textColor: colors.TextPrimary,
      },
    }),
    [],
  );
  const [markedDates, setMarkedDates] = useState<IMarkedTypes>(
    getAllDatesBetween(today, today, colorsArg),
  );

  const todayTimestamp =
    today.getTime() - (today.getTime() % (1000 * 60 * 60 * 24)); // сбрасываем timestamp этого дня до 00:00:00

  const themeStyles = useMemo(
    () => ({
      theme: {
        weekVerticalMargin: spaces.Space2,
        arrowColor: colors.IconNeutral,
        textMonthFontSize: rem(14),
        textMonthFontFamily: 'Inter-Medium',
        monthTextColor: colors.TextPrimary,
        textDayHeaderFontSize: rem(14),
        textDayHeaderFontFamily: 'Inter-Medium',
        textDayFontSize: rem(14),
        textDayFontFamily: 'Inter-Regular',
        calendarBackground: colors.BgPrimary,
        textDisabledColor: colors.TextMuted,
        dayTextColor: colors.TextPrimary,
      },
    }),
    [currentTheme],
  );

  const onDayPress = (day: DateData) => {
    const firstDay = date?.timestamp || todayTimestamp;
    const toDate = day.timestamp > firstDay ? day.timestamp : firstDay;
    const fromDate = day.timestamp > firstDay ? firstDay : day.timestamp;

    setMarkedDates(
      getAllDatesBetween(new Date(fromDate), new Date(toDate), colorsArg),
    );

    onChangeDate &&
      onChangeDate({
        dateStart: new Date(fromDate).toISOString(),
        dateEnd: new Date(toDate).toISOString(),
      });

    setDate(day);
  };

  return (
    <>
      <DefaultCalendar
        firstDay={1}
        style={styles.calendar}
        markingType={'period'}
        markedDates={markedDates}
        onDayPress={onDayPress}
        onDayLongPress={onDayPress}
        theme={themeStyles.theme}
        {...rest}
      />

      {bottomView}
    </>
  );
};

export default Calendar;

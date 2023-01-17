import React, {FC, ReactElement, useEffect, useMemo, useState} from 'react';
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
  isClear?: boolean;
}

const Calendar: FC<ICalendar> = props => {
  const {onChangeDate, defaultLocale, bottomView, isClear, ...rest} = props;
  LocaleConfig.defaultLocale = defaultLocale || 'ru';
  const {colors, currentTheme} = useTheme();
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
        color: colors.BgSecondary, //жду ответ от дизайнера по цвету
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
        calendarBackground: colors.BgPrimary,
        textSectionTitleColor: colors.TextTertiary,
        dayTextColor: colors.TextPrimary,
        textDisabledColor: colors.TextMuted,
        arrowColor: colors.IconNeutral,
        monthTextColor: colors.TextPrimary,
        textMonthFontFamily: 'Inter-Medium',
        textDayHeaderFontFamily: 'Inter-Medium',
        textMonthFontSize: rem(14),
        textDayHeaderFontSize: rem(14),
        textDayFontSize: rem(14),
        textDayFontFamily: 'Inter-Regular',
        weekVerticalMargin: 0,
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

  const onClear = () => {
    setDate(undefined);
    onChangeDate && onChangeDate({dateStart: '', dateEnd: ''});
    setMarkedDates(
      getAllDatesBetween(new Date(todayTimestamp), new Date(''), colorsArg),
    );
  };

  useEffect(() => {
    if (isClear) {
      onClear();
    }
  }, [isClear]);

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

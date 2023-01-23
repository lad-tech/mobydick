import React, {
  FC,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import {
  Calendar as DefaultCalendar,
  CalendarProps,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';
import useTheme from '@npm/mobydick-core/src/styles/theme/hooks/useTheme';
import useStyles from '@npm/mobydick-core/src/styles/theme/hooks/useStyles';
import rem from '@npm/mobydick-core/src/styles/spaces/rem';
import {TouchableOpacity, Typography} from '@npm/mobydick-core';

import {localeConfigRu} from './localeConfig';
import {getAllDatesBetween} from './functions';
import stylesCreate from './stylesCreate';
import {IChangeDate, IMarkedDates} from './types';
import Months from './Months';

LocaleConfig.locales['ru'] = localeConfigRu;

interface ICalendar extends CalendarProps {
  onChangeDate?: (dateRange: IChangeDate) => void;
  bottomView?: ReactElement;
  defaultLocale?: string;
  isClear?: boolean;
  isShowToday?: boolean;
}

const Calendar: FC<ICalendar> = props => {
  const {
    onChangeDate,
    defaultLocale,
    bottomView,
    isClear,
    isShowToday = true,
    ...rest
  } = props;
  LocaleConfig.defaultLocale = defaultLocale || 'ru';
  const {colors, currentTheme} = useTheme();
  const today = new Date();
  const [styles] = useStyles(stylesCreate);

  const colorsArg = useMemo(
    () => ({
      colorPrime: {
        color: colors.ElementBase,
        textColor: colors.TextWhite,
      },
      colorSoft: {
        color: colors.BgAccent,
        textColor: colors.TextPrimary,
      },
    }),
    [],
  );
  const [markedDates, setMarkedDates] = useState<IMarkedDates>();
  const [isDays, setIsDays] = useState(true);
  const [month, setMonth] = useState<number>(today.getMonth());

  const todayTimeMidnight = new Date(
    today.getTime() - (today.getTime() % (1000 * 60 * 60 * 24)),
  ); // сбрасываем timestamp этого дня до 00:00:00

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
    let toDate;
    let fromDate;

    if (!markedDates) {
      fromDate = day.timestamp;
      toDate = day.timestamp;
    } else {
      const {fromDate: minDate, toDate: maxDate} = markedDates;

      if (day.timestamp < minDate.getTime()) {
        fromDate = day.timestamp;
        toDate = maxDate;
      } else if (day.timestamp > maxDate.getTime()) {
        toDate = day.timestamp;
        fromDate = minDate;
      } else if (
        day.timestamp === minDate.getTime() ||
        day.timestamp === maxDate.getTime()
      ) {
        fromDate = day.timestamp;
        toDate = day.timestamp;
      } else {
        fromDate = minDate;
        toDate = day.timestamp;
      }
    }

    setMarkedDates(
      getAllDatesBetween(new Date(fromDate), new Date(toDate), colorsArg),
    );
    onChangeDate &&
      onChangeDate({
        dateStart: new Date(fromDate).toISOString(),
        dateEnd: new Date(toDate).toISOString(),
      });
  };

  const markedToday = () => {
    setMarkedDates(
      getAllDatesBetween(
        new Date(todayTimeMidnight),
        new Date(todayTimeMidnight),
        colorsArg,
      ),
    );
  };
  const onClear = () => {
    onChangeDate && onChangeDate({dateStart: '', dateEnd: ''});
    isShowToday ? markedToday() : setMarkedDates(undefined);
  };
  useLayoutEffect(() => {
    if (isShowToday) {
      markedToday();
    }
  }, []);

  useEffect(() => {
    if (isClear) {
      onClear();
    }
  }, [isClear]);

  return (
    <>
      {isDays ? (
        <DefaultCalendar
          firstDay={1}
          style={styles.calendar}
          markingType={'period'}
          markedDates={markedDates?.dates || {}}
          onDayPress={onDayPress}
          onDayLongPress={onDayPress}
          theme={themeStyles.theme}
          initialDate={today.getFullYear() + '-' + (month + 1)}
          onMonthChange={month => {
            setMonth(month.month - 1);
          }}
          customHeaderTitle={
            <TouchableOpacity onPress={() => setIsDays(false)}>
              <Typography>
                {localeConfigRu.monthNames[month] + ', ' + today.getFullYear()}
              </Typography>
            </TouchableOpacity>
          }
          {...rest}
        />
      ) : (
        <Months
          setIsDays={() => setIsDays(true)}
          setMonth={index => setMonth(index)}
        />
      )}

      {bottomView}
    </>
  );
};

export default Calendar;

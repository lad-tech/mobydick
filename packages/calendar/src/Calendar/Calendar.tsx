import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import {
  Calendar as DefaultCalendar,
  DateData,
  LocaleConfig,
} from 'react-native-calendars';
import useTheme from '@npm/mobydick-core/src/styles/theme/hooks/useTheme';
import useStyles from '@npm/mobydick-core/src/styles/theme/hooks/useStyles';
import rem from '@npm/mobydick-core/src/styles/spaces/rem';

import {localeConfigRu} from './localeConfig';
import {calculateBoundaries, getAllDatesBetween} from './functions';
import stylesCreate from './stylesCreate';
import {ICalendar, IMarkedDates} from './types';
import Months from './components/Months';
import CustomHeaderTitle from './components/CustomHeaderTitle';

const Calendar: FC<ICalendar> = props => {
  const {
    onChangeDate,
    defaultLocale = 'ru',
    bottomView,
    isClear,
    isShowToday = true,
    localeConfig = localeConfigRu,
    periodOff = false,
    ...rest
  } = props;
  LocaleConfig.locales[defaultLocale] = localeConfig;
  LocaleConfig.defaultLocale = defaultLocale;

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
  const [isShowDays, setIsShowDays] = useState(true);
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(
    today.getMonth(),
  );

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
    const {fromDate, toDate} = calculateBoundaries(day, markedDates, periodOff);

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
      onChangeDate &&
        onChangeDate({
          dateStart: new Date(todayTimeMidnight).toISOString(),
          dateEnd: new Date(todayTimeMidnight).toISOString(),
        });
    }
  }, []);

  useEffect(() => {
    if (isClear) {
      onClear();
    }
  }, [isClear]);

  const onPressCurrMonth = useCallback(
    () => setIsShowDays(!isShowDays),
    [isShowDays],
  );

  return (
    <>
      {isShowDays ? (
        <DefaultCalendar
          firstDay={1}
          style={styles.calendar}
          markingType={'period'}
          markedDates={markedDates?.dates || {}}
          onDayPress={onDayPress}
          onDayLongPress={onDayPress}
          theme={themeStyles.theme}
          initialDate={today.getFullYear() + '-' + (currentMonthIndex + 1)}
          onMonthChange={month => {
            setCurrentMonthIndex(month.month - 1);
          }}
          customHeaderTitle={
            <CustomHeaderTitle
              currentMonth={
                localeConfig.monthNames[currentMonthIndex] +
                ', ' +
                today.getFullYear()
              }
              onPress={onPressCurrMonth}
            />
          }
          {...rest}
        />
      ) : (
        <Months
          onCloseMonths={onPressCurrMonth}
          onPressMonth={monthIndex => setCurrentMonthIndex(monthIndex)}
          monthNamesShort={localeConfig.monthNamesShort}
        />
      )}

      {bottomView}
    </>
  );
};

export default Calendar;

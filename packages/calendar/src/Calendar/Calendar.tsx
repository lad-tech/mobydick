import {
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
import {px, useStyles, useTheme} from '@lad-tech/mobydick-core';

import {localeConfigRu} from './localeConfig';
import {
  calculateBoundaries,
  calculateYearRange,
  getAllDatesBetween,
  getDateForCalendar,
  getDottedDates,
  getMarkedToday,
  getMaxDate,
  getMinDate,
  isValidDate,
} from './functions';
import stylesCreate from './stylesCreate';
import {
  ICalendar,
  IDirection,
  IMarkedDates,
  ISelectionState,
  ITitle,
} from './types';
import CalendarHeader from './components/CalendarHeader';
import Years from './components/Years';
import Months from './components/Months';
import mergeObjects from './helpers/mergeObjects';

const Calendar: FC<ICalendar> = props => {
  const {
    onDateRangeChange,
    defaultLocale = 'ru',
    bottomView,
    isClear,
    isShowToday = true,
    localeConfig = localeConfigRu,
    isPeriod = false,
    initialRange,
    dottedDates = [],
    initialDate,
    maxLengthDateRange,
    maxDate,
    minDate,
    ...rest
  } = props;
  LocaleConfig.locales[defaultLocale] = localeConfig;
  LocaleConfig.defaultLocale = defaultLocale;

  const {colors, currentTheme} = useTheme();
  const currentDay = initialDate ? new Date(initialDate) : new Date();
  const [styles] = useStyles(stylesCreate);

  const colorsArg = useMemo(
    () => ({
      colorPrime: {
        color: colors.ElementAccent,
        textColor: colors.TextWhite,
      },
      colorSoft: {
        color: colors.BgAccent,
        textColor: colors.TextPrimary,
      },
      colorToday: {
        color: colors.BgSecondary,
        textColor: colors.TextPrimary,
      },
    }),
    [],
  );

  const [markedDates, setMarkedDates] = useState<IMarkedDates>();
  const [currMaxDate, setCurrMaxDate] = useState(maxDate || '');
  const [currMinDate, setCurrMinDate] = useState(minDate || '');
  const [selectionState, setSelectionState] = useState<ISelectionState>(
    ISelectionState.days,
  );
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(
    currentDay.getMonth(),
  );
  const [currentYear, setCurrentYear] = useState<number>(
    currentDay.getFullYear(),
  );

  const [yearRange, setYearRange] = useState<number[]>(
    calculateYearRange(currentYear),
  );
  const dateDots = getDottedDates(dottedDates, colors.ElementAccent);
  const dateToday = getMarkedToday(colorsArg);

  const themeStyles = useMemo(
    () => ({
      theme: {
        calendarBackground: colors.BgPrimary,
        textSectionTitleColor: colors.TextSecondary,
        dayTextColor: colors.TextPrimary,
        textDisabledColor: colors.TextMuted,
        arrowColor: colors.IconNeutral,
        monthTextColor: colors.TextPrimary,
        textDayHeaderFontFamily: 'Inter-SemiBold',
        textDayHeaderFontSize: px(14),
        textDayFontSize: px(14),
        textDayFontFamily: 'Inter-Regular',
        weekVerticalMargin: px(1),
        'stylesheet.day.period': {
          todayText: {
            fontWeight: '400',
          },
          wrapper: {
            alignItems: 'center',
            alignSelf: 'stretch',
          },
        },
        'stylesheet.calendar.header': {
          dayHeader: {
            marginTop: 0,
            marginBottom: px(5),
            color: colors.TextSecondary,
          },
        },
      },
    }),
    [currentTheme],
  );
  const updateDateRange = (
    fromDate: number | string | Date,
    toDate: number | string | Date,
  ) => {
    const dateRange = getAllDatesBetween(
      new Date(fromDate),
      new Date(toDate),
      colorsArg,
      isShowToday,
    );

    const result = mergeObjects(
      dateDots.dates,
      dateRange.dates,
      (key, first, second) => {
        return {
          ...first[key],
          ...second[key],
        };
      },
    );

    const startDate = result[getDateForCalendar(dateRange.fromDate)];

    if (startDate) {
      startDate.dotColor = colors.ElementWhite;
    }
    const endDate = result[getDateForCalendar(dateRange.toDate)];

    if (endDate) {
      endDate.dotColor = colors.ElementWhite;
    }

    setMarkedDates({
      dates: result,
      fromDate: dateRange.fromDate,
      toDate: dateRange.toDate,
      lengthMarkedDates: dateRange.lengthDateRange,
    });

    onDateRangeChange?.({
      dateStart: new Date(fromDate).toISOString(),
      dateEnd: new Date(toDate).toISOString(),
      lengthDateRange: dateRange.lengthDateRange,
    });
  };

  const onDayPress = useCallback(
    (day: DateData) => {
      const {fromDate, toDate} = calculateBoundaries(
        day,
        markedDates,
        isPeriod,
      );

      setCurrentYear(day.year);
      setCurrentMonthIndex(day.month - 1);

      updateDateRange(fromDate, toDate);
    },
    [
      isPeriod,
      colorsArg,
      onDateRangeChange,
      currentYear,
      currentMonthIndex,
      markedDates,
    ],
  );

  const markTodayAndDots = () => {
    const result = mergeObjects(
      dateDots.dates,
      dateToday.dates,
      (key, first, second) => {
        return {
          ...first[key],
          ...second[key],
        };
      },
    );

    setMarkedDates({
      dates: isShowToday ? result : dateDots.dates,
      fromDate: dateToday.fromDate,
      toDate: dateToday.toDate,
    });
  };

  const onClear = () => {
    onDateRangeChange?.({dateStart: '', dateEnd: '', lengthDateRange: 0});
    markTodayAndDots();
  };

  useLayoutEffect(() => {
    if (initialRange?.fromDate) {
      const startDate = initialRange.fromDate;
      const endDate = initialRange?.toDate || startDate;

      if (isValidDate(startDate) && isValidDate(endDate)) {
        updateDateRange(startDate, endDate);
        return;
      }
    } else {
      markTodayAndDots();
    }
  }, []);

  useEffect(() => {
    if (isClear) {
      onClear();
    }
  }, [isClear]);

  const onPressMonth = useCallback((monthIndex: number) => {
    setCurrentMonthIndex(monthIndex);
    setSelectionState(ISelectionState.days);
  }, []);

  const onCloseMonths = useCallback(
    () => setSelectionState(ISelectionState.days),
    [],
  );

  const onPressYear = useCallback((year: number) => {
    setCurrentYear(year);
    setSelectionState(ISelectionState.months);
  }, []);

  const onCloseYears = useCallback(
    () => setSelectionState(ISelectionState.months),
    [],
  );

  const onPressCurrMonth = useCallback(() => {
    setSelectionState(ISelectionState.months);
  }, []);

  const onPressCurrYear = useCallback(() => {
    if (
      selectionState === ISelectionState.days ||
      selectionState === ISelectionState.months
    ) {
      setSelectionState(ISelectionState.years);
    } else if (selectionState === ISelectionState.years) {
      setSelectionState(ISelectionState.months);
    }
    setYearRange(calculateYearRange(currentYear));
  }, [selectionState, currentYear]);

  const onPressLeft = useCallback(() => {
    if (selectionState === ISelectionState.days) {
      if (currentMonthIndex) {
        setCurrentMonthIndex(currentMonthIndex - 1);
      } else {
        setCurrentMonthIndex(11);
        setCurrentYear(currentYear - 1);
      }
    } else if (selectionState === ISelectionState.months) {
      setCurrentYear(currentYear - 1);
    } else if (selectionState === ISelectionState.years) {
      yearRange[0] &&
        setYearRange(calculateYearRange(yearRange[0], IDirection.left));
    }
  }, [currentMonthIndex, currentYear, yearRange, selectionState]);

  const onPressRight = useCallback(() => {
    if (selectionState === ISelectionState.days) {
      if (currentMonthIndex + 1 < 12) {
        setCurrentMonthIndex(currentMonthIndex + 1);
      } else {
        setCurrentMonthIndex(0);
        setCurrentYear(currentYear + 1);
      }
    } else if (selectionState === ISelectionState.months) {
      setCurrentYear(currentYear + 1);
    } else if (selectionState === ISelectionState.years) {
      const lastYear = yearRange[yearRange?.length - 1];
      lastYear && setYearRange(calculateYearRange(lastYear, IDirection.right));
    }
  }, [currentMonthIndex, yearRange, currentYear, selectionState]);

  const getCalendarTitle = (): ITitle => {
    if (selectionState === ISelectionState.months) {
      return {
        currYear: currentYear.toString(),
      };
    } else if (selectionState === ISelectionState.years) {
      return {
        currYear:
          yearRange[0]?.toString() +
          '-' +
          yearRange[yearRange.length - 1]?.toString(),
      };
    }

    return {
      currMonth: localeConfig.monthNames[currentMonthIndex] + ' ',
      currYear: currentYear.toString(),
    };
  };

  useEffect(() => {
    const fromDate = markedDates?.fromDate;
    const toDate = markedDates?.toDate;

    if (!fromDate || !toDate || !maxLengthDateRange || !isPeriod) {
      setCurrMaxDate(maxDate || '');
      setCurrMinDate(minDate || '');
      return;
    }

    const narrowMin = getMinDate(toDate, maxLengthDateRange);
    const narrowMax = getMaxDate(fromDate, maxLengthDateRange);

    if (!minDate) {
      setCurrMinDate(narrowMin);
    } else {
      setCurrMinDate(
        new Date(minDate).getTime() < new Date(narrowMin).getTime()
          ? narrowMin
          : minDate,
      );
    }
    if (!maxDate) {
      setCurrMaxDate(narrowMax);
    } else {
      setCurrMaxDate(
        new Date(maxDate).getTime() > new Date(narrowMax).getTime()
          ? narrowMax
          : maxDate,
      );
    }
  }, [
    markedDates?.fromDate,
    markedDates?.toDate,
    isPeriod,
    maxDate,
    minDate,
    maxLengthDateRange,
  ]);

  return (
    <>
      <CalendarHeader
        title={getCalendarTitle()}
        onPressLeft={onPressLeft}
        onPressRight={onPressRight}
        onPressMonth={onPressCurrMonth}
        onPressYear={onPressCurrYear}
      />
      {selectionState === ISelectionState.days && (
        <DefaultCalendar
          firstDay={1}
          style={styles.daysView}
          markingType={'period'}
          markedDates={markedDates?.dates || {}}
          onDayPress={onDayPress}
          onDayLongPress={onDayPress}
          theme={themeStyles.theme}
          initialDate={
            currentYear +
            '-' +
            `${currentMonthIndex + 1 < 10 ? 0 : ''}${currentMonthIndex + 1}`
          }
          customHeaderTitle={<></>}
          hideArrows={true}
          maxDate={currMaxDate}
          minDate={currMinDate}
          {...rest}
        />
      )}
      {selectionState === ISelectionState.months && (
        <Months
          onCloseMonths={onCloseMonths}
          onPressMonth={onPressMonth}
          monthNamesShort={localeConfig.monthNamesShort}
        />
      )}
      {selectionState === ISelectionState.years && (
        <Years
          onCloseYears={onCloseYears}
          onPressYear={onPressYear}
          yearRange={yearRange}
        />
      )}

      {bottomView}
    </>
  );
};

export default Calendar;

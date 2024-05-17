"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_calendars_1 = require("react-native-calendars");
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const localeConfig_1 = require("./localeConfig");
const functions_1 = require("./functions");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const types_1 = require("./types");
const CalendarHeader_1 = __importDefault(require("./components/CalendarHeader"));
const Years_1 = __importDefault(require("./components/Years"));
const Months_1 = __importDefault(require("./components/Months"));
const mergeObjects_1 = __importDefault(require("./helpers/mergeObjects"));
const Calendar = props => {
    const { onDateRangeChange, defaultLocale = 'ru', bottomView, isClear, isShowToday = true, localeConfig = localeConfig_1.localeConfigRu, isPeriod = false, initialRange, dottedDates = [], initialDate, maxLengthDateRange, maxDate, minDate, ...rest } = props;
    react_native_calendars_1.LocaleConfig.locales[defaultLocale] = localeConfig;
    react_native_calendars_1.LocaleConfig.defaultLocale = defaultLocale;
    const { colors, currentTheme } = (0, mobydick_core_1.useTheme)();
    const currentDay = initialDate ? new Date(initialDate) : new Date();
    const [styles] = (0, mobydick_core_1.useStyles)(stylesCreate_1.default);
    const colorsArg = (0, react_1.useMemo)(() => ({
        colorPrime: {
            color: colors.ElementBase,
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
    }), []);
    const [markedDates, setMarkedDates] = (0, react_1.useState)();
    const [currMaxDate, setCurrMaxDate] = (0, react_1.useState)(maxDate || '');
    const [currMinDate, setCurrMinDate] = (0, react_1.useState)(minDate || '');
    const [selectionState, setSelectionState] = (0, react_1.useState)(types_1.ISelectionState.days);
    const [currentMonthIndex, setCurrentMonthIndex] = (0, react_1.useState)(currentDay.getMonth());
    const [currentYear, setCurrentYear] = (0, react_1.useState)(currentDay.getFullYear());
    const [yearRange, setYearRange] = (0, react_1.useState)((0, functions_1.calculateYearRange)(currentYear));
    const dateDots = (0, functions_1.getDottedDates)(dottedDates, colors.ElementBase);
    const dateToday = (0, functions_1.getMarkedToday)(colorsArg);
    const themeStyles = (0, react_1.useMemo)(() => ({
        theme: {
            calendarBackground: colors.BgPrimary,
            textSectionTitleColor: colors.TextSecondary,
            dayTextColor: colors.TextPrimary,
            textDisabledColor: colors.TextMuted,
            arrowColor: colors.IconNeutral,
            monthTextColor: colors.TextPrimary,
            textDayHeaderFontFamily: 'Inter-SemiBold',
            textDayHeaderFontSize: (0, mobydick_core_1.px)(14),
            textDayFontSize: (0, mobydick_core_1.px)(14),
            textDayFontFamily: 'Inter-Regular',
            weekVerticalMargin: (0, mobydick_core_1.px)(1),
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
                    marginBottom: (0, mobydick_core_1.px)(5),
                    color: colors.TextSecondary,
                },
            },
        },
    }), [currentTheme]);
    const updateDateRange = (fromDate, toDate) => {
        const dateRange = (0, functions_1.getAllDatesBetween)(new Date(fromDate), new Date(toDate), colorsArg, isShowToday);
        const result = (0, mergeObjects_1.default)(dateDots.dates, dateRange.dates, (key, first, second) => {
            return {
                ...first[key],
                ...second[key],
            };
        });
        const startDate = result[(0, functions_1.getDateForCalendar)(dateRange.fromDate)];
        if (startDate) {
            startDate.dotColor = colors.ElementWhite;
        }
        const endDate = result[(0, functions_1.getDateForCalendar)(dateRange.toDate)];
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
    const onDayPress = (0, react_1.useCallback)((day) => {
        const { fromDate, toDate } = (0, functions_1.calculateBoundaries)(day, markedDates, isPeriod);
        setCurrentYear(day.year);
        setCurrentMonthIndex(day.month - 1);
        updateDateRange(fromDate, toDate);
    }, [
        isPeriod,
        colorsArg,
        onDateRangeChange,
        currentYear,
        currentMonthIndex,
        markedDates,
    ]);
    const markTodayAndDots = () => {
        const result = (0, mergeObjects_1.default)(dateDots.dates, dateToday.dates, (key, first, second) => {
            return {
                ...first[key],
                ...second[key],
            };
        });
        setMarkedDates({
            dates: isShowToday ? result : dateDots.dates,
            fromDate: dateToday.fromDate,
            toDate: dateToday.toDate,
        });
    };
    const onClear = () => {
        onDateRangeChange?.({ dateStart: '', dateEnd: '', lengthDateRange: 0 });
        markTodayAndDots();
    };
    (0, react_1.useLayoutEffect)(() => {
        if (initialRange?.fromDate) {
            const startDate = initialRange.fromDate;
            const endDate = initialRange?.toDate || startDate;
            if ((0, functions_1.isValidDate)(startDate) && (0, functions_1.isValidDate)(endDate)) {
                updateDateRange(startDate, endDate);
                return;
            }
        }
        else {
            markTodayAndDots();
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (isClear) {
            onClear();
        }
    }, [isClear]);
    const onPressMonth = (0, react_1.useCallback)((monthIndex) => {
        setCurrentMonthIndex(monthIndex);
        setSelectionState(types_1.ISelectionState.days);
    }, []);
    const onCloseMonths = (0, react_1.useCallback)(() => setSelectionState(types_1.ISelectionState.days), []);
    const onPressYear = (0, react_1.useCallback)((year) => {
        setCurrentYear(year);
        setSelectionState(types_1.ISelectionState.months);
    }, []);
    const onCloseYears = (0, react_1.useCallback)(() => setSelectionState(types_1.ISelectionState.months), []);
    const onPressCurrMonth = (0, react_1.useCallback)(() => {
        setSelectionState(types_1.ISelectionState.months);
    }, []);
    const onPressCurrYear = (0, react_1.useCallback)(() => {
        if (selectionState === types_1.ISelectionState.days ||
            selectionState === types_1.ISelectionState.months) {
            setSelectionState(types_1.ISelectionState.years);
        }
        else if (selectionState === types_1.ISelectionState.years) {
            setSelectionState(types_1.ISelectionState.months);
        }
        setYearRange((0, functions_1.calculateYearRange)(currentYear));
    }, [selectionState, currentYear]);
    const onPressLeft = (0, react_1.useCallback)(() => {
        if (selectionState === types_1.ISelectionState.days) {
            if (currentMonthIndex) {
                setCurrentMonthIndex(currentMonthIndex - 1);
            }
            else {
                setCurrentMonthIndex(11);
                setCurrentYear(currentYear - 1);
            }
        }
        else if (selectionState === types_1.ISelectionState.months) {
            setCurrentYear(currentYear - 1);
        }
        else if (selectionState === types_1.ISelectionState.years) {
            yearRange[0] &&
                setYearRange((0, functions_1.calculateYearRange)(yearRange[0], types_1.IDirection.left));
        }
    }, [currentMonthIndex, currentYear, yearRange, selectionState]);
    const onPressRight = (0, react_1.useCallback)(() => {
        if (selectionState === types_1.ISelectionState.days) {
            if (currentMonthIndex + 1 < 12) {
                setCurrentMonthIndex(currentMonthIndex + 1);
            }
            else {
                setCurrentMonthIndex(0);
                setCurrentYear(currentYear + 1);
            }
        }
        else if (selectionState === types_1.ISelectionState.months) {
            setCurrentYear(currentYear + 1);
        }
        else if (selectionState === types_1.ISelectionState.years) {
            const lastYear = yearRange[yearRange?.length - 1];
            lastYear && setYearRange((0, functions_1.calculateYearRange)(lastYear, types_1.IDirection.right));
        }
    }, [currentMonthIndex, yearRange, currentYear, selectionState]);
    const getCalendarTitle = () => {
        if (selectionState === types_1.ISelectionState.months) {
            return {
                currYear: currentYear.toString(),
            };
        }
        else if (selectionState === types_1.ISelectionState.years) {
            return {
                currYear: yearRange[0]?.toString() +
                    '-' +
                    yearRange[yearRange.length - 1]?.toString(),
            };
        }
        return {
            currMonth: localeConfig.monthNames[currentMonthIndex] + ' ',
            currYear: currentYear.toString(),
        };
    };
    (0, react_1.useEffect)(() => {
        const fromDate = markedDates?.fromDate;
        const toDate = markedDates?.toDate;
        if (!fromDate || !toDate || !maxLengthDateRange || !isPeriod) {
            setCurrMaxDate(maxDate || '');
            setCurrMinDate(minDate || '');
            return;
        }
        const narrowMin = (0, functions_1.getMinDate)(toDate, maxLengthDateRange);
        const narrowMax = (0, functions_1.getMaxDate)(fromDate, maxLengthDateRange);
        if (!minDate) {
            setCurrMinDate(narrowMin);
        }
        else {
            setCurrMinDate(new Date(minDate).getTime() < new Date(narrowMin).getTime()
                ? narrowMin
                : minDate);
        }
        if (!maxDate) {
            setCurrMaxDate(narrowMax);
        }
        else {
            setCurrMaxDate(new Date(maxDate).getTime() > new Date(narrowMax).getTime()
                ? narrowMax
                : maxDate);
        }
    }, [
        markedDates?.fromDate,
        markedDates?.toDate,
        isPeriod,
        maxDate,
        minDate,
        maxLengthDateRange,
    ]);
    return (<>
      <CalendarHeader_1.default title={getCalendarTitle()} onPressLeft={onPressLeft} onPressRight={onPressRight} onPressMonth={onPressCurrMonth} onPressYear={onPressCurrYear}/>
      {selectionState === types_1.ISelectionState.days && (<react_native_calendars_1.Calendar firstDay={1} style={styles.daysView} markingType={'period'} markedDates={markedDates?.dates || {}} onDayPress={onDayPress} onDayLongPress={onDayPress} theme={themeStyles.theme} initialDate={currentYear +
                '-' +
                `${currentMonthIndex + 1 < 10 ? 0 : ''}${currentMonthIndex + 1}`} customHeaderTitle={<></>} hideArrows={true} maxDate={currMaxDate} minDate={currMinDate} {...rest}/>)}
      {selectionState === types_1.ISelectionState.months && (<Months_1.default onCloseMonths={onCloseMonths} onPressMonth={onPressMonth} monthNamesShort={localeConfig.monthNamesShort}/>)}
      {selectionState === types_1.ISelectionState.years && (<Years_1.default onCloseYears={onCloseYears} onPressYear={onPressYear} yearRange={yearRange}/>)}

      {bottomView}
    </>);
};
exports.default = Calendar;

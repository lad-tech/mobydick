"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMinDate = exports.getMaxDate = exports.isValidDate = exports.calculateYearRange = exports.calculateBoundaries = exports.getMarkedToday = exports.getDottedDates = exports.getAllDatesBetween = exports.getDateForCalendar = void 0;
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const types_1 = require("./types");
const getDateForCalendar = (date) => {
    const yr = date.getFullYear();
    const month = `${date.getMonth() + 1 < 10 ? 0 : ''}${date.getMonth() + 1}`;
    const d = `${date.getDate() < 10 ? 0 : ''}${date.getDate()}`;
    return `${yr}-${month}-${d}`;
};
exports.getDateForCalendar = getDateForCalendar;
const getStyleToday = (colorToday) => {
    return {
        startingDay: true,
        endingDay: true,
        color: colorToday.color,
        textColor: colorToday.textColor,
        customContainerStyle: {
            borderRadius: (0, mobydick_core_1.px)(4),
            width: '100%',
        },
        customTextStyle: {
            fontWeight: '600',
            fontFamily: 'Inter-SemiBold',
        },
    };
};
const getAllDatesBetween = (fromDate, toDate, { colorPrime, colorSoft, colorToday }, isShowToday) => {
    let curDate = new Date(fromDate.getTime());
    const datesForCalendar = {};
    let lengthDateRange = 1;
    if (isShowToday) {
        datesForCalendar[(0, exports.getDateForCalendar)(new Date())] =
            getStyleToday(colorToday);
    }
    const today = new Date();
    const todayTimeMidnight = today.getTime() - (today.getTime() % (1000 * 60 * 60 * 24)); // сбрасываем timestamp этого дня до 00:00:00
    datesForCalendar[(0, exports.getDateForCalendar)(fromDate)] = {
        startingDay: true,
        endingDay: true,
        color: colorPrime.color,
        textColor: colorPrime.textColor,
        customContainerStyle: {
            borderRadius: (0, mobydick_core_1.px)(4),
            width: '100%',
        },
        customTextStyle: isShowToday && fromDate.getTime() === todayTimeMidnight
            ? {
                fontWeight: '600',
                fontFamily: 'Inter-SemiBold',
                color: colorPrime.textColor,
            }
            : undefined,
    };
    while (curDate < toDate) {
        lengthDateRange = lengthDateRange + 1;
        curDate = new Date(curDate.setDate(curDate.getDate() + 1));
        datesForCalendar[(0, exports.getDateForCalendar)(curDate)] = {
            color: colorSoft.color,
            textColor: colorSoft.textColor,
        };
        if (isShowToday && curDate.getTime() === todayTimeMidnight) {
            datesForCalendar[(0, exports.getDateForCalendar)(new Date())] = {
                color: colorSoft.color,
                customTextStyle: {
                    fontWeight: '600',
                    fontFamily: 'Inter-SemiBold',
                },
            };
        }
    }
    datesForCalendar[(0, exports.getDateForCalendar)(toDate)] = {
        startingDay: true,
        endingDay: true,
        textColor: colorPrime.textColor,
        color: colorPrime.color,
        customContainerStyle: {
            borderRadius: (0, mobydick_core_1.px)(4),
            width: '100%',
        },
        customTextStyle: isShowToday && toDate.getTime() === todayTimeMidnight
            ? {
                fontWeight: '600',
                fontFamily: 'Inter-SemiBold',
                color: colorPrime.textColor,
            }
            : undefined,
    };
    return { dates: datesForCalendar, fromDate, toDate, lengthDateRange };
};
exports.getAllDatesBetween = getAllDatesBetween;
const getDottedDates = (dots, dotColor) => {
    const datesForCalendar = {};
    for (const dot of dots) {
        datesForCalendar[(0, exports.getDateForCalendar)(dot)] = {
            marked: true,
            dotColor: dotColor,
        };
    }
    return { dates: datesForCalendar };
};
exports.getDottedDates = getDottedDates;
const getMarkedToday = ({ colorToday }) => {
    const datesForCalendar = {};
    datesForCalendar[(0, exports.getDateForCalendar)(new Date())] = getStyleToday(colorToday);
    return { dates: datesForCalendar, fromDate: null, toDate: null };
};
exports.getMarkedToday = getMarkedToday;
const calculateBoundaries = (day, markedDates, isPeriod) => {
    let toDate;
    let fromDate;
    if (!markedDates ||
        !isPeriod ||
        !markedDates.fromDate ||
        !markedDates.toDate) {
        fromDate = day.timestamp;
        toDate = day.timestamp;
    }
    else {
        const { fromDate: minDate, toDate: maxDate } = markedDates;
        if (day.timestamp < minDate.getTime()) {
            fromDate = day.timestamp;
            toDate = maxDate;
        }
        else if (day.timestamp > maxDate.getTime()) {
            toDate = day.timestamp;
            fromDate = minDate;
        }
        else if (day.timestamp === minDate.getTime() ||
            day.timestamp === maxDate.getTime()) {
            fromDate = day.timestamp;
            toDate = day.timestamp;
        }
        else {
            fromDate = minDate;
            toDate = day.timestamp;
        }
    }
    return { fromDate, toDate };
};
exports.calculateBoundaries = calculateBoundaries;
const calculateYearRange = (currentYear, direction) => {
    const yearRange = [];
    switch (direction) {
        case types_1.IDirection.left: {
            for (let i = 12; i > 0; i--) {
                yearRange.push(currentYear - i);
            }
            break;
        }
        case types_1.IDirection.right: {
            for (let i = 1; i <= 12; i++) {
                yearRange.push(currentYear + i);
            }
            break;
        }
        default: {
            for (let i = -4; i <= 7; i++) {
                yearRange.push(currentYear + i);
            }
            break;
        }
    }
    return yearRange;
};
exports.calculateYearRange = calculateYearRange;
const isValidDate = (date) => {
    return Boolean(Date.parse(date));
};
exports.isValidDate = isValidDate;
const getMaxDate = (fromDate, maxLengthDateRange) => {
    const date = new Date(fromDate);
    return (0, exports.getDateForCalendar)(new Date(date?.setDate(fromDate.getDate() + maxLengthDateRange - 1)));
};
exports.getMaxDate = getMaxDate;
const getMinDate = (toDate, maxLengthDateRange) => {
    const date = new Date(toDate);
    return (0, exports.getDateForCalendar)(new Date(date?.setDate(toDate.getDate() - (maxLengthDateRange - 1))));
};
exports.getMinDate = getMinDate;

import rem from '@npm/mobydick-core/src/styles/spaces/rem';
import {DateData} from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';

import {
  colorElem,
  IColors,
  IDirection,
  IMarkedDates,
  IMarkedTypes,
} from './types';

export const getDateForCalendar = (date: Date): string => {
  const yr = date.getFullYear();
  const month = `${date.getMonth() + 1 < 10 ? 0 : ''}${date.getMonth() + 1}`;
  const d = `${date.getDate() < 10 ? 0 : ''}${date.getDate()}`;
  return `${yr}-${month}-${d}`;
};

const getStyleToday = (colorToday: colorElem): MarkingProps => {
  return {
    startingDay: true,
    endingDay: true,

    color: colorToday.color,
    textColor: colorToday.textColor,

    customContainerStyle: {
      borderRadius: rem(4),
      width: '100%',
    },
    customTextStyle: {
      fontWeight: '600',
      fontFamily: 'Inter-SemiBold',
    },
  };
};

export const getAllDatesBetween = (
  fromDate: Date,
  toDate: Date,
  {colorPrime, colorSoft, colorToday}: IColors,
  isShowToday: boolean,
) => {
  let curDate = new Date(fromDate.getTime());
  const datesForCalendar: IMarkedTypes = {};

  let lengthDateRange = 1;
  if (isShowToday) {
    datesForCalendar[getDateForCalendar(new Date())] =
      getStyleToday(colorToday);
  }

  const today = new Date();
  const todayTimeMidnight =
    today.getTime() - (today.getTime() % (1000 * 60 * 60 * 24)); // сбрасываем timestamp этого дня до 00:00:00

  datesForCalendar[getDateForCalendar(fromDate)] = {
    startingDay: true,
    endingDay: true,

    color: colorPrime.color,
    textColor: colorPrime.textColor,

    customContainerStyle: {
      borderRadius: rem(4),
      width: '100%',
    },
    customTextStyle:
      isShowToday && fromDate.getTime() === todayTimeMidnight
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
    datesForCalendar[getDateForCalendar(curDate)] = {
      color: colorSoft.color,
      textColor: colorSoft.textColor,
    };

    if (isShowToday && curDate.getTime() === todayTimeMidnight) {
      datesForCalendar[getDateForCalendar(new Date())] = {
        color: colorSoft.color,
        customTextStyle: {
          fontWeight: '600',
          fontFamily: 'Inter-SemiBold',
        },
      };
    }
  }
  datesForCalendar[getDateForCalendar(toDate)] = {
    startingDay: true,
    endingDay: true,
    textColor: colorPrime.textColor,
    color: colorPrime.color,
    customContainerStyle: {
      borderRadius: rem(4),
      width: '100%',
    },

    customTextStyle:
      isShowToday && toDate.getTime() === todayTimeMidnight
        ? {
            fontWeight: '600',
            fontFamily: 'Inter-SemiBold',
            color: colorPrime.textColor,
          }
        : undefined,
  };

  return {dates: datesForCalendar, fromDate, toDate, lengthDateRange};
};

export const getDottedDates = (dots: Date[], dotColor: string) => {
  const datesForCalendar: IMarkedTypes = {};

  for (const dot of dots) {
    datesForCalendar[getDateForCalendar(dot)] = {
      marked: true,
      dotColor: dotColor,
    };
  }

  return {dates: datesForCalendar};
};

export const getMarkedToday = ({colorToday}: IColors) => {
  const datesForCalendar: IMarkedTypes = {};

  datesForCalendar[getDateForCalendar(new Date())] = getStyleToday(colorToday);

  return {dates: datesForCalendar, fromDate: null, toDate: null};
};

export const calculateBoundaries = (
  day: DateData,
  markedDates: IMarkedDates | undefined,
  isPeriod: boolean,
) => {
  let toDate;
  let fromDate;

  if (
    !markedDates ||
    !isPeriod ||
    !markedDates.fromDate ||
    !markedDates.toDate
  ) {
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
  return {fromDate, toDate};
};

export const calculateYearRange = (
  currentYear: number,
  direction?: IDirection,
) => {
  const yearRange = [];

  switch (direction) {
    case IDirection.left: {
      for (let i = 12; i > 0; i--) {
        yearRange.push(currentYear - i);
      }
      break;
    }

    case IDirection.right: {
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

export const isValidDate = (date: string) => {
  return Boolean(Date.parse(date));
};

export const getMaxDate = (fromDate: Date, maxLengthDateRange: number) => {
  const date = new Date(fromDate);

  return getDateForCalendar(
    new Date(date?.setDate(fromDate.getDate() + maxLengthDateRange - 1)),
  );
};

export const getMinDate = (toDate: Date, maxLengthDateRange: number) => {
  const date = new Date(toDate);

  return getDateForCalendar(
    new Date(date?.setDate(toDate.getDate() - (maxLengthDateRange - 1))),
  );
};

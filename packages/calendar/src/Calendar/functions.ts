import rem from '@npm/mobydick-core/src/styles/spaces/rem';

import {IColors, IMarkedTypes} from './types';

export const getDateForCalendar = (date: Date): string => {
  const yr = date.getFullYear();
  const month = `${date.getMonth() + 1 < 10 ? 0 : ''}${date.getMonth() + 1}`;
  const d = `${date.getDate() < 10 ? 0 : ''}${date.getDate()}`;
  return `${yr}-${month}-${d}`;
};

export const getAllDatesBetween = (
  fromDate: Date,
  toDate: Date,
  {colorPrime, colorSoft}: IColors,
) => {
  let curDate = new Date(fromDate.getTime());
  const datesForCalendar: IMarkedTypes = {};
  datesForCalendar[getDateForCalendar(fromDate)] = {
    startingDay: true,
    endingDay: true,

    color: colorPrime.color,
    textColor: colorPrime.textColor,

    customContainerStyle: {
      borderRadius: rem(4),
      width: '100%',
    },
  };

  while (curDate < toDate) {
    curDate = new Date(curDate.setDate(curDate.getDate() + 1));
    datesForCalendar[getDateForCalendar(curDate)] = {
      color: colorSoft.color,
      textColor: colorSoft.textColor,
    };
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
  };
  return {dates: datesForCalendar, fromDate, toDate};
};

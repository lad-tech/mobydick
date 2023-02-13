import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import {CalendarProps} from 'react-native-calendars';
import {ReactElement} from 'react';

export interface IMarkedTypes {
  [key: string]: MarkingProps;
}

export interface IMarkedDates {
  dates: IMarkedTypes;
  fromDate: Date | null;
  toDate: Date | null;
  lengthMarkedDates?: number;
}
export type colorElem = {
  color: string;
  textColor: string;
};

export type IColors = {
  colorPrime: colorElem;
  colorSoft: colorElem;
  colorToday: colorElem;
};

export interface IDateRange {
  dateStart: string;
  dateEnd: string;
  lengthDateRange: number;
}

export enum IButtonView {
  small = 'small',
  large = 'large',
}

export interface ICalendar extends CalendarProps {
  onDateRangeChange?: (dateRange: IDateRange) => void;
  bottomView?: ReactElement;
  defaultLocale?: string;
  isClear?: boolean;
  isShowToday?: boolean;
  localeConfig?: ILocaleConfig | undefined;
  isPeriod?: boolean;
  initialRange?: {fromDate: string; toDate?: string};
  dottedDates?: Date[];
}

export interface ILocaleConfig {
  monthNames: string[];
  monthNamesShort: string[];
  dayNames: string[];
  dayNamesShort: string[];
  today?: string;
}

export enum ISelectionState {
  days = 'days',
  months = 'months',
  years = 'years',
}

export enum IDirection {
  right = 'right',
  left = 'left',
  none = 'none',
}

export interface ITitle {
  currMonth?: string | undefined;
  currYear?: string | undefined;
}

import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';

export interface IMarkedTypes {
  [key: string]: MarkingProps;
}

export interface IMarkedDates {
  dates: IMarkedTypes;
  fromDate: Date;
  toDate: Date;
}
export type colorElem = {
  color: string;
  textColor: string;
};

export type IColors = {
  colorPrime: colorElem;
  colorSoft: colorElem;
};

export interface IChangeDate {
  dateStart: string;
  dateEnd: string;
}

export enum IButtonView {
  small = 'small',
  large = 'large',
}

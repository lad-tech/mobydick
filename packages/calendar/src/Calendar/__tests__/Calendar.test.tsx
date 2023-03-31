import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import Calendar from '../Calendar';
import {LABELS} from '../constants';

describe('Calendar', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-07-15'));
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders correctly', () => {
    const {toJSON} = render(<Calendar />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly isClear', () => {
    const {toJSON} = render(
      <Calendar
        isClear={true}
        initialRange={{fromDate: '2022-02-16', toDate: '2022-02-19'}}
        isShowToday={false}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly not isValidDate', () => {
    const {toJSON} = render(
      <Calendar
        isClear={true}
        initialRange={{fromDate: 'jijk', toDate: 'lklk'}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly isClear isShowToday', () => {
    const {toJSON} = render(
      <Calendar
        isClear={true}
        initialRange={{fromDate: '2022-02-16'}}
        initialDate={'2022-02'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarLeftArrow', () => {
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarLeftArrow = getByLabelText(LABELS.calendarLeftArrow);

    fireEvent.press(calendarLeftArrow);
    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarLeftArrow 01 -> 12', () => {
    jest.setSystemTime(new Date('2022-01-15'));
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarLeftArrow = getByLabelText(LABELS.calendarLeftArrow);

    fireEvent.press(calendarLeftArrow);
    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarPressTitle * 2 calendarLeftArrow', () => {
    const {toJSON, getByLabelText, getAllByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarPressTitleMonth = getByLabelText(
      LABELS.calendarPressTitleMonth,
    );
    fireEvent.press(calendarPressTitleMonth); //months

    const calendarPressTitleYear = getByLabelText(
      LABELS.calendarPressTitleYear,
    );
    const calendarLeftArrow = getByLabelText(LABELS.calendarLeftArrow);
    fireEvent.press(calendarLeftArrow);

    fireEvent.press(calendarPressTitleYear); //years
    fireEvent.press(calendarLeftArrow);

    const pressYear = getAllByLabelText(LABELS.pressYear)[2];
    pressYear && fireEvent.press(pressYear);

    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarPressTitle * 3 calendarLeftArrow', () => {
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarPressTitleMonth = getByLabelText(
      LABELS.calendarPressTitleMonth,
    );
    fireEvent.press(calendarPressTitleMonth); //months

    const calendarPressTitleYear = getByLabelText(
      LABELS.calendarPressTitleYear,
    );
    const calendarLeftArrow = getByLabelText(LABELS.calendarLeftArrow);
    fireEvent.press(calendarLeftArrow);

    fireEvent.press(calendarPressTitleYear); //years
    fireEvent.press(calendarLeftArrow);

    fireEvent.press(calendarPressTitleYear); //range years
    fireEvent.press(calendarLeftArrow);
    expect(toJSON()).toMatchSnapshot();
  });

  it('press calendarRightArrow', () => {
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarRightArrow = getByLabelText(LABELS.calendarRightArrow);

    fireEvent.press(calendarRightArrow);
    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarRightArrow 12 -> 1', () => {
    jest.setSystemTime(new Date('2022-12-15'));
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarRightArrow = getByLabelText(LABELS.calendarRightArrow);

    fireEvent.press(calendarRightArrow);
    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarPressTitle calendarRightArrow', () => {
    const {toJSON, getByLabelText, getAllByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarPressTitleMonth = getByLabelText(
      LABELS.calendarPressTitleMonth,
    );
    fireEvent.press(calendarPressTitleMonth); //months

    const calendarPressTitleYear = getByLabelText(
      LABELS.calendarPressTitleYear,
    );
    const calendarRightArrow = getByLabelText(LABELS.calendarRightArrow);
    fireEvent.press(calendarRightArrow);

    const pressMonth = getAllByLabelText(LABELS.pressMonth)[5];
    pressMonth && fireEvent.press(pressMonth);

    fireEvent.press(calendarPressTitleYear); // years
    fireEvent.press(calendarPressTitleYear); // range years

    fireEvent.press(calendarRightArrow);

    expect(toJSON()).toMatchSnapshot();
  });

  it('press calendarPressTitle*2 calendarRightArrow', () => {
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarPressTitleMonth = getByLabelText(
      LABELS.calendarPressTitleMonth,
    );
    fireEvent.press(calendarPressTitleMonth); //months

    const calendarPressTitleYear = getByLabelText(
      LABELS.calendarPressTitleYear,
    );

    const calendarRightArrow = getByLabelText(LABELS.calendarRightArrow);
    fireEvent.press(calendarRightArrow);

    fireEvent.press(calendarPressTitleYear); //years

    fireEvent.press(calendarRightArrow);

    fireEvent.press(calendarPressTitleYear); //range years

    fireEvent.press(calendarRightArrow);
    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarPressTitleYear', () => {
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarPressTitleYear = getByLabelText(
      LABELS.calendarPressTitleYear,
    );
    fireEvent.press(calendarPressTitleYear); // years
    fireEvent.press(calendarPressTitleYear); // range years
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly dottedDates', () => {
    const {toJSON} = render(
      <Calendar
        isClear={true}
        initialRange={{fromDate: '2022-01-16', toDate: '2022-01-19'}}
        isShowToday={false}
        dottedDates={[
          new Date('2022-02-08'),
          new Date('2022-02-28'),
          new Date('2022-02-16'),
        ]}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly dottedDates cc', () => {
    const {toJSON} = render(
      <Calendar
        isClear={true}
        initialRange={{fromDate: '2022-01-16', toDate: '2022-01-19'}}
        isShowToday={false}
        dottedDates={[
          new Date('2022-02-08'),
          new Date('2022-02-28'),
          new Date('2022-02-16'),
        ]}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly maxLengthDateRange', () => {
    const {toJSON} = render(
      <Calendar
        isClear={true}
        initialRange={{fromDate: '2022-01-16', toDate: '2022-01-19'}}
        initialDate={'2022-01-16'}
        isShowToday={false}
        isPeriod={true}
        maxLengthDateRange={10}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly minDate maxLengthDateRange', () => {
    const {toJSON} = render(
      <Calendar
        initialRange={{fromDate: '2022-01-16', toDate: '2022-01-19'}}
        isShowToday={false}
        isPeriod={true}
        minDate={'2022-01-16'}
        maxLengthDateRange={10}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly maxDate maxLengthDateRange', () => {
    const {toJSON} = render(
      <Calendar
        initialRange={{fromDate: '2022-01-16', toDate: '2022-01-19'}}
        isShowToday={false}
        isPeriod={true}
        maxDate={'2022-01-19'}
        maxLengthDateRange={10}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly maxDate minDate maxLengthDateRange', () => {
    const {toJSON} = render(
      <Calendar
        initialRange={{fromDate: '2022-01-16', toDate: '2022-01-19'}}
        isShowToday={false}
        isPeriod={true}
        maxDate={'2022-01-29'}
        minDate={'2022-01-16'}
        maxLengthDateRange={10}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly maxDate minDate maxLengthDateRange isPeriod = false', () => {
    const {toJSON} = render(
      <Calendar
        initialRange={{fromDate: '2022-01-16', toDate: '2022-01-19'}}
        isShowToday={false}
        maxDate={'2022-01-29'}
        minDate={'2022-01-14'}
        maxLengthDateRange={10}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly maxDate minDate maxLengthDateRange fromDate = toDate', () => {
    const {toJSON} = render(
      <Calendar
        initialRange={{fromDate: '2022-02-16', toDate: '2022-02-16'}}
        isShowToday={false}
        maxDate={'2022-03-29'}
        minDate={'2022-01-01'}
        maxLengthDateRange={10}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

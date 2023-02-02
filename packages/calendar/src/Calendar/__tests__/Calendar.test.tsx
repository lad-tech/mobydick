import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import Calendar from '../Calendar';

describe('Calendar', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2022-07-15'));
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders correctly', () => {
    const {toJSON} = render(<Calendar />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('press calendarLeftArrow', () => {
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarLeftArrow = getByLabelText('calendarLeftArrow');

    fireEvent.press(calendarLeftArrow);
    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarLeftArrow 01 -> 12', () => {
    jest.setSystemTime(new Date('2022-01-15'));
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarLeftArrow = getByLabelText('calendarLeftArrow');

    fireEvent.press(calendarLeftArrow);
    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarRightArrow', () => {
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarRightArrow = getByLabelText('calendarRightArrow');

    fireEvent.press(calendarRightArrow);
    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarRightArrow 12 -> 1', () => {
    jest.setSystemTime(new Date('2022-11-15'));
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarRightArrow = getByLabelText('calendarRightArrow');

    fireEvent.press(calendarRightArrow);
    expect(toJSON()).toMatchSnapshot();
  });
  it('press calendarPressTitle calendarRightArrow', () => {
    const {toJSON, getByLabelText, getAllByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarPressTitle = getByLabelText('calendarPressTitle');
    fireEvent.press(calendarPressTitle);

    const calendarRightArrow = getByLabelText('calendarRightArrow');
    fireEvent.press(calendarRightArrow);

    const pressMonth = getAllByLabelText('pressMonth')[5];
    pressMonth && fireEvent.press(pressMonth);

    fireEvent.press(calendarPressTitle);
    fireEvent.press(calendarPressTitle);

    fireEvent.press(calendarRightArrow);

    expect(toJSON()).toMatchSnapshot();
  });

  it('press calendarPressTitle*2 calendarRightArrow', () => {
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarPressTitle = getByLabelText('calendarPressTitle');
    fireEvent.press(calendarPressTitle);

    const calendarRightArrow = getByLabelText('calendarRightArrow');
    fireEvent.press(calendarRightArrow);

    fireEvent.press(calendarPressTitle);

    fireEvent.press(calendarRightArrow);

    fireEvent.press(calendarPressTitle);

    fireEvent.press(calendarRightArrow);
    expect(toJSON()).toMatchSnapshot();
  });

  it('press calendarPressTitle * 2 calendarLeftArrow', () => {
    const {toJSON, getByLabelText, getAllByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarPressTitle = getByLabelText('calendarPressTitle');
    fireEvent.press(calendarPressTitle);

    const calendarLeftArrow = getByLabelText('calendarLeftArrow');
    fireEvent.press(calendarLeftArrow);

    fireEvent.press(calendarPressTitle);
    fireEvent.press(calendarLeftArrow);

    const pressYear = getAllByLabelText('pressYear')[2];
    pressYear && fireEvent.press(pressYear);

    expect(toJSON()).toMatchSnapshot();
  });

  it('press calendarPressTitle * 3 calendarLeftArrow', () => {
    const {toJSON, getByLabelText} = render(
      <Calendar onDateRangeChange={() => undefined} isShowToday={false} />,
    );
    const calendarPressTitle = getByLabelText('calendarPressTitle');
    fireEvent.press(calendarPressTitle);

    const calendarLeftArrow = getByLabelText('calendarLeftArrow');
    fireEvent.press(calendarLeftArrow);

    fireEvent.press(calendarPressTitle);
    fireEvent.press(calendarLeftArrow);

    fireEvent.press(calendarPressTitle);
    fireEvent.press(calendarLeftArrow);
    expect(toJSON()).toMatchSnapshot();
  });
});

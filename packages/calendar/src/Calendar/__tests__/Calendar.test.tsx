import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Button from '@npm/mobydick-core/src/cta/components/Button/Button';

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

  it('press', () => {
    const {toJSON, getByText} = render(
      <Calendar
        onDateRangeChange={() => undefined}
        defaultLocale={'ru'}
        isShowToday={false}
        bottomView={<Button />}
      />,
    );
    const dateStart = getByText('17');

    fireEvent.press(dateStart);

    expect(toJSON()).toMatchSnapshot();
  });
  it('press isClear', () => {
    const {toJSON, getByText, getAllByText} = render(
      <Calendar
        onDateRangeChange={() => undefined}
        defaultLocale={'ru'}
        isClear={true}
        isPeriod={true}
        bottomView={<Button />}
      />,
    );
    const dateStart = getByText('17');

    fireEvent.press(dateStart);
    const dateEnd = getAllByText('25')[0];
    dateEnd && fireEvent.press(dateEnd);

    expect(toJSON()).toMatchSnapshot();
  });
  it('on submit two', () => {
    const submit = jest.fn();
    const {getByText} = render(
      <Calendar onDateRangeChange={submit} isPeriod={true} />,
    );
    const dateStart = getByText('17');

    fireEvent.press(dateStart);
    const dateEnd = getByText('11');

    dateEnd && fireEvent.press(dateEnd);

    expect(submit).toHaveBeenNthCalledWith(1, {
      dateStart: '2022-06-17T00:00:00.000Z',
      dateEnd: '2022-06-17T00:00:00.000Z',
    });
    expect(submit).toHaveBeenNthCalledWith(2, {
      dateStart: '2022-05-11T00:00:00.000Z',
      dateEnd: '2022-06-17T00:00:00.000Z',
    });
  });

  it('on submit day < min', () => {
    const submit = jest.fn();
    const {getByText} = render(
      <Calendar onDateRangeChange={submit} isPeriod={true} />,
    );
    const dateStart = getByText('11');

    fireEvent.press(dateStart);
    const dateEnd = getByText('11');
    fireEvent.press(dateEnd);

    expect(submit).toHaveBeenNthCalledWith(1, {
      dateStart: '2022-06-11T00:00:00.000Z',
      dateEnd: '2022-06-11T00:00:00.000Z',
    });
    expect(submit).toHaveBeenNthCalledWith(2, {
      dateStart: '2022-05-11T00:00:00.000Z',
      dateEnd: '2022-06-11T00:00:00.000Z',
    });
  });

  it('on submit day > max', () => {
    jest.setSystemTime(new Date('2021-05-15'));
    const submit = jest.fn();
    const {getByText} = render(
      <Calendar onDateRangeChange={submit} isPeriod={true} />,
    );
    const dateStart = getByText('21');

    fireEvent.press(dateStart);
    const dateEnd = getByText('17');
    fireEvent.press(dateEnd);

    expect(submit).toHaveBeenNthCalledWith(1, {
      dateStart: '2021-04-21T00:00:00.000Z',
      dateEnd: '2021-04-21T00:00:00.000Z',
    });
    expect(submit).toHaveBeenNthCalledWith(2, {
      dateStart: '2021-03-17T00:00:00.000Z',
      dateEnd: '2021-04-21T00:00:00.000Z',
    });
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

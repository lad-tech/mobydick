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
        onChangeDate={() => undefined}
        defaultLocale={'ru'}
        isShowToday={false}
        bottomView={<Button />}
      />,
    );
    const dateStart = getByText('17');
    const dateEnd = getByText('25');

    fireEvent.press(dateStart);
    fireEvent.press(dateEnd);

    expect(toJSON()).toMatchSnapshot();
  });
  it('press isClear ', () => {
    const {toJSON, getByText} = render(
      <Calendar
        onChangeDate={() => undefined}
        defaultLocale={'ru'}
        isClear={true}
        bottomView={<Button />}
      />,
    );
    const dateStart = getByText('17');
    const dateEnd = getByText('25');

    fireEvent.press(dateStart);
    fireEvent.press(dateEnd);

    expect(toJSON()).toMatchSnapshot();
  });
  it('on submit two', () => {
    const submit = jest.fn();
    const {getByText} = render(<Calendar onChangeDate={submit} />);
    const dateStart = getByText('17');
    const dateEnd = getByText('25');

    fireEvent.press(dateStart);
    fireEvent.press(dateEnd);
    expect(submit).toHaveBeenNthCalledWith(1, {
      dateStart: '2022-07-15T00:00:00.000Z',
      dateEnd: '2022-07-17T00:00:00.000Z',
    });
    expect(submit).toHaveBeenNthCalledWith(2, {
      dateStart: '2022-07-15T00:00:00.000Z',
      dateEnd: '2022-07-25T00:00:00.000Z',
    });
  });

  it('on submit day > min ', () => {
    const submit = jest.fn();
    const {getByText} = render(<Calendar onChangeDate={submit} />);
    const dateStart = getByText('17');

    fireEvent.press(dateStart);
    const dateEnd = getByText('14');
    fireEvent.press(dateEnd);

    expect(submit).toHaveBeenNthCalledWith(1, {
      dateStart: '2022-07-15T00:00:00.000Z',
      dateEnd: '2022-07-17T00:00:00.000Z',
    });
    expect(submit).toHaveBeenNthCalledWith(2, {
      dateStart: '2022-07-14T00:00:00.000Z',
      dateEnd: '2022-07-17T00:00:00.000Z',
    });
  });
  it('on submit day < min ', () => {
    const submit = jest.fn();
    const {getByText} = render(<Calendar onChangeDate={submit} />);
    const dateStart = getByText('11');

    fireEvent.press(dateStart);
    const dateEnd = getByText('11');
    fireEvent.press(dateEnd);

    expect(submit).toHaveBeenNthCalledWith(1, {
      dateStart: '2022-07-11T00:00:00.000Z',
      dateEnd: '2022-07-15T00:00:00.000Z',
    });
    expect(submit).toHaveBeenNthCalledWith(2, {
      dateStart: '2022-07-11T00:00:00.000Z',
      dateEnd: '2022-07-11T00:00:00.000Z',
    });
  });
  it('on submit day > max ', () => {
    jest.setSystemTime(new Date('2021-05-15'));
    const submit = jest.fn();
    const {getByText} = render(<Calendar onChangeDate={submit} />);
    const dateStart = getByText('21');

    fireEvent.press(dateStart);
    const dateEnd = getByText('17');
    fireEvent.press(dateEnd);

    expect(submit).toHaveBeenNthCalledWith(1, {
      dateStart: '2021-05-15T00:00:00.000Z',
      dateEnd: '2022-07-21T00:00:00.000Z',
    });
    expect(submit).toHaveBeenNthCalledWith(2, {
      dateStart: '2021-05-15T00:00:00.000Z',
      dateEnd: '2022-07-17T00:00:00.000Z',
    });
  });
});

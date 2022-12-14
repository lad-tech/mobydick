import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Button} from '@npm/mobydick-cta';

import Calendar from '../Calendar';

describe('Calendar', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2022-05-15'));
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
      dateStart: '2022-05-15T00:00:00.000Z',
      dateEnd: '2022-12-17T00:00:00.000Z',
    });
    expect(submit).toHaveBeenNthCalledWith(2, {
      dateStart: '2022-12-17T00:00:00.000Z',
      dateEnd: '2022-12-25T00:00:00.000Z',
    });
  });

  it('on submit two different', () => {
    const submit = jest.fn();
    const {getByText} = render(<Calendar onChangeDate={submit} />);
    const dateStart = getByText('17');

    fireEvent.press(dateStart);
    const dateEnd = getByText('14');
    fireEvent.press(dateEnd);

    expect(submit).toHaveBeenNthCalledWith(1, {
      dateStart: '2022-05-15T00:00:00.000Z',
      dateEnd: '2022-12-17T00:00:00.000Z',
    });
    expect(submit).toHaveBeenNthCalledWith(2, {
      dateStart: '2022-12-14T00:00:00.000Z',
      dateEnd: '2022-12-17T00:00:00.000Z',
    });
  });
});

import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {IButtonView} from '../types';
import ModalCalendar from '../ModalCalendar';

describe('ModalCalendar', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2022-07-15'));
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders correctly', () => {
    const submit = jest.fn();
    const {toJSON} = render(
      <ModalCalendar
        id={'1'}
        onClose={() => undefined}
        onDateRangeChange={submit}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('bottomView IButtonView.small', () => {
    const submit = jest.fn();
    const {toJSON, getByText} = render(
      <ModalCalendar
        id={'1'}
        onClose={() => undefined}
        onDateRangeChange={submit}
        descriptionText={'textCalendar'}
        buttonView={IButtonView.small}
      />,
    );
    const applyButton = getByText('Применить');
    fireEvent.press(applyButton);

    expect(toJSON()).toMatchSnapshot();
  });
  it('bottomView IButtonView.large', () => {
    const submit = jest.fn();
    const {toJSON, getByText} = render(
      <ModalCalendar
        id={'1'}
        onClose={() => undefined}
        onDateRangeChange={submit}
        descriptionText={'textCalendar'}
        titlePrefix={'titlePrefix'}
        titleSuffix={'titleSuffix'}
        titleFont={'Regular-Muted-M'}
        descriptionFont={'Medium-Primary-M'}
        buttonView={IButtonView.large}
      />,
    );

    const dateStart = getByText('11');
    fireEvent.press(dateStart);

    const applyButton = getByText('Сбросить');
    fireEvent.press(applyButton);
    expect(toJSON()).toMatchSnapshot();
  });
});

import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import ModalCalendar from '../ModalCalendar';

describe('ModalCalendar', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
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
        onChangeDate={submit}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('bottomView', () => {
    const submit = jest.fn();
    const {toJSON, getByText} = render(
      <ModalCalendar
        id={'1'}
        onClose={() => undefined}
        onChangeDate={submit}
        textCalendar={'textCalendar'}
      />,
    );
    const applyButton = getByText('Применить');
    fireEvent.press(applyButton);

    expect(toJSON()).toMatchSnapshot();
  });
});

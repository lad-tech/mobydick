import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import Months from '../Months';
import {localeConfigRu} from '../../localeConfig';

describe('Months', () => {
  it('render', () => {
    const onCloseMonths = jest.fn();
    const onPressMonth = jest.fn();
    const {toJSON} = render(
      <Months
        onCloseMonths={onCloseMonths}
        onPressMonth={onPressMonth}
        monthNamesShort={localeConfigRu.monthNamesShort}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('press month ', () => {
    const onCloseMonths = jest.fn();
    const onPressMonth = jest.fn();
    const {toJSON, getAllByLabelText} = render(
      <Months
        onCloseMonths={onCloseMonths}
        onPressMonth={onPressMonth}
        monthNamesShort={localeConfigRu.monthNamesShort}
      />,
    );

    const pressMonth = getAllByLabelText('pressMonth')[5];
    pressMonth && fireEvent.press(pressMonth);
    expect(toJSON()).toMatchSnapshot();
  });
});

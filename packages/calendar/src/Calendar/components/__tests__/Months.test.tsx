import {render} from '@testing-library/react-native';
import React from 'react';

import Months from '../Months';

describe('Months', () => {
  it('render', () => {
    const onCloseMonths = jest.fn();
    const onPressMonth = jest.fn();
    const {toJSON} = render(
      <Months onCloseMonths={onCloseMonths} onPressMonth={onPressMonth} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

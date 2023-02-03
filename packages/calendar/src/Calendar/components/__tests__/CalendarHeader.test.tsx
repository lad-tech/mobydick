import {render} from '@testing-library/react-native';
import React from 'react';

import CalendarHeader from '../CalendarHeader';

describe('CalendarHeader', () => {
  it('render', () => {
    const onPressMonth = jest.fn();
    const onPressYear = jest.fn();
    const onPressRight = jest.fn();
    const onPressLeft = jest.fn();

    const {toJSON} = render(
      <CalendarHeader
        title={{
          currMonth: 'currMonth',
          currYear: 'currentYear',
        }}
        onPressMonth={onPressMonth}
        onPressYear={onPressYear}
        onPressRight={onPressRight}
        onPressLeft={onPressLeft}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

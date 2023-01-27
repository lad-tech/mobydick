import {render} from '@testing-library/react-native';
import React from 'react';

import CalendarHeader from '../CalendarHeader';

describe('CalendarHeader', () => {
  it('render', () => {
    const onPress = jest.fn();
    const onPressRight = jest.fn();
    const onPressLeft = jest.fn();

    const {toJSON} = render(
      <CalendarHeader
        title={'CalendarHeader'}
        onPress={onPress}
        onPressRight={onPressRight}
        onPressLeft={onPressLeft}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

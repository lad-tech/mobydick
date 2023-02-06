import {render} from '@testing-library/react-native';
import React from 'react';

import BadgeIndicator from '../BadgeIndicator';
import {IIndicatorTypes} from '../types';

describe('BadgeIndicator', () => {
  test('render BadgeIndicator secondary', () => {
    const {toJSON} = render(
      <BadgeIndicator type={IIndicatorTypes.secondary} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render BadgeIndicator primary', () => {
    const {toJSON} = render(
      <BadgeIndicator type={IIndicatorTypes.primary} style={{top: 0}} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

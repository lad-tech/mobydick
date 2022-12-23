import React from 'react';
import {render} from '@testing-library/react-native';

import {Indicator} from '../index';

describe('@npm/mobydick-core/Indicator', () => {
  it('renders correctly with colors', () => {
    const {toJSON} = render(<Indicator percent={20} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

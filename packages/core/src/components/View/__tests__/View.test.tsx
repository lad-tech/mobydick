import React from 'react';
import {render} from '@testing-library/react-native';

import View from '../View';

describe('@npm/mobydick-core/View', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<View />);
    expect(toJSON()).toMatchSnapshot();
  });
});

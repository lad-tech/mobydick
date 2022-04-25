import React from 'react';
import {render} from '@testing-library/react-native';

import Spinner from '../index';

describe('@mobydick/progress/Spinner', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Spinner />);
    expect(toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import {render} from '@testing-library/react-native';

import Button from '../index';

describe('@mobydick/core/Button', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Button title={'button'} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

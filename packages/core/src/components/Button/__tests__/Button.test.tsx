import React from 'react';
import {render} from '@testing-library/react-native';

import Button from '../Button';

describe('@npm/mobydick-core/Button', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Button title={'button'} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

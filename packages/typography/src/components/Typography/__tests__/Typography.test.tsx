import React from 'react';
import {render} from '@testing-library/react-native';

import Typography from '../index';

describe('@npm/mobydick-typography/Typography', () => {
  it('renders default correctly', () => {
    const {toJSON} = render(<Typography>My Text</Typography>);
    expect(toJSON()).toMatchSnapshot();
  });
});

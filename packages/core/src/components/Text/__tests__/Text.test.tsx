import React from 'react';
import {render} from '@testing-library/react-native';

import Text from '../index';

describe('@mobydick/core/Text', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Text>Text</Text>);
    expect(toJSON()).toMatchSnapshot();
  });
});

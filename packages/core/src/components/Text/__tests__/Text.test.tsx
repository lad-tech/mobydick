import React from 'react';
import {render} from '@testing-library/react-native';

import Text from '../index';

describe('@npm/mobydick-core/Text', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Text>Text</Text>);
    expect(toJSON()).toMatchSnapshot();
  });
});

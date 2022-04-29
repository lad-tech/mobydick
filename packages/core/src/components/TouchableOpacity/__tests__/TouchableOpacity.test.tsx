import React from 'react';
import {render} from '@testing-library/react-native';

import TouchableOpacity from '../index';

describe('@mobydick/core/TouchableOpacity', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<TouchableOpacity />);
    expect(toJSON()).toMatchSnapshot();
  });
});

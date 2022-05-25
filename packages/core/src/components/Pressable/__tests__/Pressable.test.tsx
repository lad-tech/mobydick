import React from 'react';
import {render} from '@testing-library/react-native';

import Pressable from '../index';

describe('@npm/mobydick-core/Pressable', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Pressable />);
    expect(toJSON()).toMatchSnapshot();
  });
});

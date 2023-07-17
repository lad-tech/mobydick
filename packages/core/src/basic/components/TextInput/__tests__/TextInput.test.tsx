import React from 'react';
import {render} from '@testing-library/react-native';

import TextInput from '../TextInput';

describe('@lad-tech/mobydick-core/TextInput', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<TextInput />);
    expect(toJSON()).toMatchSnapshot();
  });
});

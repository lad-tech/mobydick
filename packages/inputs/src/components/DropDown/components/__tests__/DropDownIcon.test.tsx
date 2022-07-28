import React from 'react';
import {render} from '@testing-library/react-native';

import Icon from '../DropDownIcon';

describe('@npm/mobydick-inputs/DropDownIcon', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Icon isOpen={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

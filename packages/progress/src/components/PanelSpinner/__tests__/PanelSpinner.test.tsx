import React from 'react';
import {render} from '@testing-library/react-native';

import PanelSpinner from '../index';

describe('@npm/mobydick-progress/PanelSpinner', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<PanelSpinner isSpin />);
    expect(toJSON()).toMatchSnapshot();
  });
});

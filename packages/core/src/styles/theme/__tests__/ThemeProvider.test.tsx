import React from 'react';
import {render} from '@testing-library/react-native';

import ThemeProvider from '../ThemeProvider';

describe('ThemeProvider', () => {
  it('render correctly', () => {
    const {toJSON} = render(<ThemeProvider />);
    expect(toJSON()).toMatchSnapshot();
  });
});

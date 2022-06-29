import React from 'react';
import {render} from '@testing-library/react-native';

import PopupsProvider from '../PopupsProvider';

describe('@npm/mobydick-popups/PopupsProvider', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it('should renders correctly', () => {
    const {toJSON} = render(<PopupsProvider />);

    expect(toJSON()).toMatchSnapshot();
  });
});

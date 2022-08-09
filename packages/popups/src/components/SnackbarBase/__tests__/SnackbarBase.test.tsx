import React from 'react';
import {render} from '@testing-library/react-native';

import {SnackbarBase} from '../index';

describe('@npm/mobydick-popups/SnackbarBase', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(<SnackbarBase id={'id'} onClose={() => null} />);

    expect(toJSON()).toMatchSnapshot();
  });
});

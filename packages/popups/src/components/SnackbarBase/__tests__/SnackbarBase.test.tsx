import React from 'react';
import {render} from '@testing-library/react-native';

import SnackbarBase from '../SnackbarBase';

describe('@npm/mobydick-popups/ModalBase', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(<SnackbarBase id={'id'} onClose={() => null} />);

    expect(toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import {render} from '@testing-library/react-native';

import CloseIcon from '../CloseIcon';

describe('@npm/mobydick-popups/CloseIcon', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(<CloseIcon onPress={() => null} />);

    expect(toJSON()).toMatchSnapshot();
  });
});

import {render} from '@testing-library/react-native';
import React from 'react';

import CancelItem from '../CancelItem';

describe('@npm/mobydick-popups/ActionSheetBase', () => {
  it('should renders correctly CancelItem', () => {
    const {toJSON} = render(<CancelItem />);

    expect(toJSON()).toMatchSnapshot();
  });
});

import {render} from '@testing-library/react-native';
import React from 'react';

import LastItem from '../LastItem';

describe('@npm/mobydick-popups/ActionSheetBase', () => {
  it('should renders correctly LastItem', () => {
    const {toJSON} = render(<LastItem />);

    expect(toJSON()).toMatchSnapshot();
  });
});

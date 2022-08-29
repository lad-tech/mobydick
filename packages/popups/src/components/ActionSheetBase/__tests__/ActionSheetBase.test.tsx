import {render} from '@testing-library/react-native';
import React from 'react';

import ActionSheetBase from '../ActionSheetBase';

describe('@npm/mobydick-popups/ActionSheetBase', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(<ActionSheetBase id={'id'} onClose={() => null} />);

    expect(toJSON()).toMatchSnapshot();
  });
});

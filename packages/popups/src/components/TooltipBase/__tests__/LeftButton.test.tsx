import {render} from '@testing-library/react-native';
import React from 'react';
import {IButtonSize} from '@npm/mobydick-cta';

import LeftButton from '../LeftButton';

describe('@npm/mobydick-popups/TooltipBase/LeftButton', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(
      <LeftButton size={IButtonSize.fixed} text={'text'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

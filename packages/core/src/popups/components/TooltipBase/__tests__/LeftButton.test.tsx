import {render} from '@testing-library/react-native';
import React from 'react';

import {IButtonSize} from '../../../../cta/components/Button/types';
import LeftButton from '../LeftButton';

describe('@lad-tech/mobydick-core/TooltipBase/LeftButton', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(
      <LeftButton size={IButtonSize.fixed} text={'text'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

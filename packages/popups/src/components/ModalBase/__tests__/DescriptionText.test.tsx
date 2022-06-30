import React from 'react';
import {render} from '@testing-library/react-native';

import DescriptionText from '../DescriptionText';

describe('@npm/mobydick-popups/DescriptionText', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(
      <DescriptionText
        descriptionText={'descriptionText'}
        descriptionStyles={{flex: 1}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

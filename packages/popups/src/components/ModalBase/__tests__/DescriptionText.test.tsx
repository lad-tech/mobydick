import React from 'react';
import {render} from '@testing-library/react-native';

import DescriptionText from '../DescriptionText';

describe('@npm/mobydick-popups/DescriptionText', () => {
  it('should renders correctly without descriptionFont', () => {
    const {toJSON} = render(
      <DescriptionText
        descriptionText={'descriptionText'}
        descriptionStyles={{flex: 1}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with descriptionFont', () => {
    const {toJSON} = render(
      <DescriptionText
        descriptionText={'description text two'}
        descriptionStyles={{backgroundColor: '#000'}}
        descriptionFont={'Medium-Secondary-M'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

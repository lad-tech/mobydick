import React from 'react';
import {render} from '@testing-library/react-native';
import DescriptionText from '@npm/mobydick-popups/src/components/ModalBase/DescriptionText';

describe('@npm/mobydick-popups/DescriptionText', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
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

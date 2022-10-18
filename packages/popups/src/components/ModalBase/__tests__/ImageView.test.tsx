import {render} from '@testing-library/react-native';
import React from 'react';
import {View} from '@npm/mobydick-core';

import ImageView from '../ImageView';

describe('@npm/mobydick-popups/ImageView', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(<ImageView image={<View />} />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with styles', () => {
    const {toJSON} = render(
      <ImageView image={<View />} imageStyles={{flex: 1}} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

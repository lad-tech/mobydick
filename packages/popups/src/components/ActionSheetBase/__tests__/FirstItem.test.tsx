import {render} from '@testing-library/react-native';
import React from 'react';

import FirstItem from '../FirstItem';

describe('@npm/mobydick-popups/ActionSheetBase', () => {
  it('should renders correctly FirstItem', () => {
    const {toJSON} = render(<FirstItem />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly FirstItem label', () => {
    const {toJSON} = render(
      <FirstItem label={'label'} labelFont={'Regular-White-S'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

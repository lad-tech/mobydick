import {render} from '@testing-library/react-native';
import React from 'react';

import InnerItem from '../InnerItem';

describe('@npm/mobydick-popups/ActionSheetBase', () => {
  it('should renders correctly InnerItem', () => {
    const {toJSON} = render(<InnerItem />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly InnerItem label', () => {
    const {toJSON} = render(<InnerItem label={'label'} />);

    expect(toJSON()).toMatchSnapshot();
  });
});

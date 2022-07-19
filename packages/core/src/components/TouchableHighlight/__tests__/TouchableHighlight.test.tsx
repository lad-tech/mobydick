import React from 'react';
import {render} from '@testing-library/react-native';

import TouchableHighlight from '../TouchableHighlight';

describe('@npm/mobydick-core/TouchableHightlight', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<TouchableHighlight />);
    expect(toJSON()).toMatchSnapshot();
  });
});

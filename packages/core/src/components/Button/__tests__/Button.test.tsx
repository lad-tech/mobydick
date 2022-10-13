import React from 'react';
import {render} from '@testing-library/react-native';

import ButtonWrapper from '../ButtonWrapper';

describe('@npm/mobydick-core/Button', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<ButtonWrapper title={'button'} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

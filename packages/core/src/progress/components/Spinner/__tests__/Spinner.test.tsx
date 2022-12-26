import React from 'react';
import {render} from '@testing-library/react-native';

import {Spinner} from '../index';
import {ISizeSpinner} from '../types';

describe('@npm/mobydick-core/Spinner', () => {
  it('renders correctly S', () => {
    const {toJSON} = render(<Spinner />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly M', () => {
    const {toJSON} = render(<Spinner size={ISizeSpinner.M} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly L', () => {
    const {toJSON} = render(<Spinner size={ISizeSpinner.L} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

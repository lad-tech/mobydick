import React from 'react';
import {render} from '@testing-library/react-native';

import {ISizeSpinner} from '../types';
import Loader from '../Loader';

describe('@npm/mobydick-progress/Loader', () => {
  it('renders correctly S', () => {
    const {toJSON} = render(<Loader size={ISizeSpinner.S} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly M', () => {
    const {toJSON} = render(<Loader size={ISizeSpinner.M} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly L', () => {
    const {toJSON} = render(<Loader size={ISizeSpinner.L} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import {render} from '@testing-library/react-native';

import Radio from '../Radio';

describe('@npm/mobydick-core/Radio', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Radio value={'text'} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly selected', () => {
    const {toJSON} = render(<Radio value={'text'} selected />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly disabled', () => {
    const {toJSON} = render(<Radio value={'text'} disabled />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly selected and disabled', () => {
    const {toJSON} = render(<Radio value={'text'} selected disabled />);
    expect(toJSON()).toMatchSnapshot();
  });
});

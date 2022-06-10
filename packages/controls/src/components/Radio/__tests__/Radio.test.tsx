import React from 'react';
import {render} from '@testing-library/react-native';
import {Radio} from '@npm/mobydick-controls';

describe('@npm/mobydick-controls/Radio', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Radio text={'text'} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly selected', () => {
    const {toJSON} = render(<Radio text={'text'} selected />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly disabled', () => {
    const {toJSON} = render(<Radio text={'text'} disabled />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly selected and disabled', () => {
    const {toJSON} = render(<Radio text={'text'} selected disabled />);
    expect(toJSON()).toMatchSnapshot();
  });
});

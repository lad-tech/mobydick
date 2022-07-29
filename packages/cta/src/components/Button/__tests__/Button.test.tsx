import React from 'react';
import {render} from '@testing-library/react-native';

import {ISize, ITypes} from '../types';
import Button from '../index';

describe('@npm/mobydick-cta/Button', () => {
  it('renders correctly', () => {
    const {toJSON, rerender} = render(<Button text={'text'} />);
    expect(toJSON()).toMatchSnapshot();

    rerender(<Button text={'text'} font={'Bold-Error-L'} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly secondary', () => {
    const {toJSON} = render(<Button type={ITypes.secondary} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly tertiary', () => {
    const {toJSON} = render(<Button type={ITypes.tertiary} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly disabled', () => {
    const {toJSON} = render(<Button type={ITypes.disabled} disabled={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly loading', () => {
    const {toJSON} = render(<Button type={ITypes.loading} loading={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly fixed', () => {
    const {toJSON} = render(<Button size={ISize.fixed} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly small', () => {
    const {toJSON, rerender} = render(<Button size={ISize.small} />);
    expect(toJSON()).toMatchSnapshot();

    rerender(<Button size={ISize.small} loading={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly large', () => {
    const {toJSON} = render(<Button size={ISize.large} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

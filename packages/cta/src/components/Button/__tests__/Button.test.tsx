import React from 'react';
import {render} from '@testing-library/react-native';
import {View} from '@npm/mobydick-core';

import {ISize, ITypes} from '../types';
import Button from '../index';

describe('@npm/mobydick-cta/Button', () => {
  it('renders correctly', () => {
    const {toJSON, rerender} = render(<Button text={'text'} />);
    expect(toJSON()).toMatchSnapshot();

    rerender(<Button text={'text'} font={'Bold-Error-L'} size={ISize.small} />);
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
  it('renders correctly destructive', () => {
    const {toJSON} = render(
      <Button type={ITypes.destructive} size={ISize.fixed} />,
    );
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
  it('renders correctly left icon size large', () => {
    const {toJSON} = render(
      <Button
        size={ISize.large}
        leftIcon={<View />}
        rightIcon={<View />}
        text={'text'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly left icon small', () => {
    const {toJSON} = render(
      <Button size={ISize.small} leftIcon={<View />} rightIcon={<View />} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly without size', () => {
    const {toJSON} = render(<Button size={'ISize' as unknown as ISize} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import {render} from '@testing-library/react-native';
import {View} from '@npm/mobydick-core';

import {IButtonSize, IButtonTypes} from '../types';
import Button from '../index';

describe('@npm/mobydick-cta/Button', () => {
  it('renders correctly', () => {
    const {toJSON, rerender} = render(<Button text={'text'} />);
    expect(toJSON()).toMatchSnapshot();

    rerender(
      <Button text={'text'} font={'Bold-Error-L'} size={IButtonSize.small} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly secondary', () => {
    const {toJSON} = render(<Button type={IButtonTypes.secondary} count={2} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly tertiary', () => {
    const {toJSON} = render(<Button type={IButtonTypes.tertiary} count={4} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly disabled', () => {
    const {toJSON} = render(
      <Button type={IButtonTypes.disabled} disabled={true} count={6} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly destructive', () => {
    const {toJSON} = render(
      <Button
        type={IButtonTypes.destructive}
        size={IButtonSize.fixed}
        count={2}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly loading', () => {
    const {toJSON} = render(
      <Button type={IButtonTypes.loading} loading={true} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly fixed', () => {
    const {toJSON} = render(<Button size={IButtonSize.fixed} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly small', () => {
    const {toJSON, rerender} = render(<Button size={IButtonSize.small} />);
    expect(toJSON()).toMatchSnapshot();

    rerender(<Button size={IButtonSize.small} loading={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly large', () => {
    const {toJSON} = render(<Button size={IButtonSize.large} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly left icon size large', () => {
    const {toJSON} = render(
      <Button
        size={IButtonSize.large}
        leftIcon={<View />}
        rightIcon={<View />}
        text={'text'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly left icon small', () => {
    const {toJSON} = render(
      <Button
        size={IButtonSize.small}
        leftIcon={<View />}
        rightIcon={<View />}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly without size', () => {
    const {toJSON} = render(
      <Button size={'ISize' as unknown as IButtonSize} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly text', () => {
    const {toJSON} = render(<Button size={IButtonSize.small} text={'text'} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly left icon size small', () => {
    const {toJSON} = render(
      <Button
        size={IButtonSize.small}
        leftIcon={<View />}
        rightIcon={<View />}
        text={'text'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly loading without type', () => {
    const {toJSON} = render(<Button type={'' as IButtonTypes} count={2} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it.each([IButtonTypes.tertiary, IButtonTypes.secondary])(
    'renders correctly loading types',
    type => {
      const {toJSON} = render(<Button type={type} loading={true} />);
      expect(toJSON()).toMatchSnapshot();
    },
  );

  it('renders correctly loading disabled ', () => {
    const {toJSON} = render(
      <Button type={IButtonTypes.secondary} disabled={true} loading={true} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

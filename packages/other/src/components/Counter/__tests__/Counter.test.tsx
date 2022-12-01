import React from 'react';
import {render} from '@testing-library/react-native';

import Counter from '../Counter';
import {ICounterSize, ICounterTypes} from '../types';

describe('Counter', () => {
  test('render counter ', () => {
    const {toJSON} = render(<Counter count={0} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterSize.medium', () => {
    const {toJSON} = render(<Counter size={ICounterSize.medium} count={1} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterSize.small', () => {
    const {toJSON} = render(<Counter size={ICounterSize.small} count={12} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterTypes.secondary', () => {
    const {toJSON} = render(
      <Counter type={ICounterTypes.secondary} count={123} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterTypes.destructive', () => {
    const {toJSON} = render(
      <Counter type={ICounterTypes.destructive} count={2} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterTypes.primary', () => {
    const {toJSON} = render(
      <Counter type={ICounterTypes.primary} count={99} maxLength={1} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterTypes.tertiary', () => {
    const {toJSON} = render(
      <Counter type={ICounterTypes.tertiary} count={10} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterTypes.disabled', () => {
    const {toJSON} = render(
      <Counter type={ICounterTypes.disabled} count={10} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter style', () => {
    const {toJSON} = render(
      <Counter style={{backgroundColor: '#FFF'}} count={20} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

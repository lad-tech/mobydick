import React from 'react';
import {render} from '@testing-library/react-native';

import Counter from '../Counter';
import {ICounterSize, ICounterTypes} from '../types';

describe('Counter', () => {
  test('render counter', () => {
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
  test('render counter ICounterTypes.accentLight', () => {
    const {toJSON} = render(
      <Counter type={ICounterTypes.accentLight} count={123} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterTypes.attentionLight', () => {
    const {toJSON} = render(
      <Counter type={ICounterTypes.attentionLight} count={2} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterTypes.attention', () => {
    const {toJSON} = render(
      <Counter type={ICounterTypes.attention} count={99} maxLength={1} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterTypes.accent', () => {
    const {toJSON} = render(<Counter type={ICounterTypes.accent} count={10} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterTypes.mutedLight', () => {
    const {toJSON} = render(
      <Counter type={ICounterTypes.mutedLight} count={10} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter ICounterTypes.muted', () => {
    const {toJSON} = render(<Counter type={ICounterTypes.muted} count={10} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render counter style', () => {
    const {toJSON} = render(
      <Counter style={{backgroundColor: '#FFF'}} count={20} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render notification', () => {
    const {toJSON} = render(<Counter />);
    expect(toJSON()).toMatchSnapshot();
  });
});

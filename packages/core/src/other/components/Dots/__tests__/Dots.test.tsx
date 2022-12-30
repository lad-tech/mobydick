import {render} from '@testing-library/react-native';
import React from 'react';

import Dots from '../Dots';

describe('Dots', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('render dots length > 7', () => {
    const {toJSON} = render(<Dots length={10} activeDot={0} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots length < 7', () => {
    const {toJSON} = render(<Dots length={6} activeDot={0} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots activeDot=2', () => {
    const {toJSON} = render(<Dots length={16} activeDot={2} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots activeDot=10', () => {
    const {toJSON} = render(<Dots length={10} activeDot={9} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render dots activeDot right', () => {
    const {toJSON, rerender} = render(<Dots length={10} activeDot={9} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={2} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={1} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={0} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('render dots activeDot left', () => {
    const {toJSON, rerender} = render(<Dots length={10} activeDot={3} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={0} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={1} />);
    expect(toJSON()).toMatchSnapshot();
    rerender(<Dots length={10} activeDot={5} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

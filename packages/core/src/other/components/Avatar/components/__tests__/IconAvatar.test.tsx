import {render} from '@testing-library/react-native';
import React from 'react';

import IconAvatar from '../IconAvatar';
import {ISizeAvatar} from '../../types';

describe('IconAvatar', () => {
  test('render IconAvatar', () => {
    const {toJSON} = render(<IconAvatar size={ISizeAvatar.S} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render IconAvatar size S', () => {
    const {toJSON} = render(<IconAvatar size={ISizeAvatar.S} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render IconAvatar size M background', () => {
    const {toJSON} = render(<IconAvatar size={ISizeAvatar.M} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render IconAvatar size L background', () => {
    const {toJSON} = render(<IconAvatar size={ISizeAvatar.L} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render IconAvatar size XL background', () => {
    const {toJSON} = render(<IconAvatar size={ISizeAvatar.XL} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

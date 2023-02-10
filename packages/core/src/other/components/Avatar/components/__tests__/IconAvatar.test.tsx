import {render} from '@testing-library/react-native';
import React from 'react';

import IconAvatar from '../IconAvatar';
import {IAvatarSize} from '../../types';

describe('IconAvatar', () => {
  test('render IconAvatar', () => {
    const {toJSON} = render(<IconAvatar size={IAvatarSize.S} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render IconAvatar size S', () => {
    const {toJSON} = render(<IconAvatar size={IAvatarSize.S} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render IconAvatar size M background', () => {
    const {toJSON} = render(<IconAvatar size={IAvatarSize.M} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render IconAvatar size L background', () => {
    const {toJSON} = render(<IconAvatar size={IAvatarSize.L} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render IconAvatar size XL background', () => {
    const {toJSON} = render(<IconAvatar size={IAvatarSize.XL} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

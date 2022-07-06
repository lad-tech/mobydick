import React from 'react';
import {render} from '@testing-library/react-native';

import {Toggle} from '../index';

describe('Toggle', () => {
  it('should renders correctly by default', function () {
    const {toJSON} = render(<Toggle active={false} disabled={false} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly active', function () {
    const {toJSON} = render(<Toggle active disabled={false} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly disabled', function () {
    const {toJSON} = render(<Toggle active={false} disabled />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly active and disabled', function () {
    const {toJSON} = render(<Toggle active disabled />);
    expect(toJSON()).toMatchSnapshot();
  });
});

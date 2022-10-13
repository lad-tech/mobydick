import {render} from '@testing-library/react-native';
import React from 'react';

import AlertContent from '../AlertContent';
import {IAlertTypes} from '../types';

describe('@npm/mobydick-popups/modalBase', () => {
  it('should renders correctly AlertContent type = warning', () => {
    const {toJSON} = render(<AlertContent type={IAlertTypes.warning} />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly AlertContent type = check', () => {
    const {toJSON} = render(<AlertContent type={IAlertTypes.check} />);

    expect(toJSON()).toMatchSnapshot();
  });
});

import {render} from '@testing-library/react-native';
import React from 'react';

import AlertContent from '../AlertContent';

describe('@npm/mobydick-popups/modalBase', () => {
  it('should renders correctly AlertContent type = check', () => {
    const {toJSON} = render(<AlertContent />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly AlertContent type = warning', () => {
    const {toJSON} = render(
      <AlertContent
        name={'icon-warning'}
        color={'#fff'}
        style={{backgroundColor: '#fff'}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

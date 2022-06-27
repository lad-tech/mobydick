import {render} from '@testing-library/react-native';
import React from 'react';
import {Tooltip} from '@npm/mobydick-popups/src/components/Tooltip';

describe('@npm/mobydick-popups/Tooltip', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(
      <Tooltip
        message={'message'}
        position={{top: '120', bottom: '10', left: '10', right: '10'}}
        isArrow
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

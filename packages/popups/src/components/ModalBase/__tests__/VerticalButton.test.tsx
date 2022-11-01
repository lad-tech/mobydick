import {render} from '@testing-library/react-native';
import {IButtonTypes} from '@npm/mobydick-cta';
import React from 'react';

import VerticalButton from '../VerticalButton';

describe('@npm/mobydick-popups/modalBase', () => {
  it('should renders correctly VerticalButton one button ', () => {
    const {toJSON} = render(
      <VerticalButton
        type={IButtonTypes.destructive}
        onPress={() => console.log('onPress')}
        text={'text'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

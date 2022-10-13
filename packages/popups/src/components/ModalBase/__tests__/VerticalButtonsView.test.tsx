import {render} from '@testing-library/react-native';
import {Button, ITypes} from '@npm/mobydick-cta';
import React from 'react';

import VerticalButtonsView from '../VerticalButtonsView';

describe('@npm/mobydick-popups/modalBase', () => {
  it('should renders correctly VerticalButtonsView destructive ', () => {
    const {toJSON} = render(
      <VerticalButtonsView
        type={ITypes.destructive}
        onPress={() => console.log('onPress')}
        text={'text'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly VerticalButtonsView secondary ', () => {
    const {toJSON} = render(
      <VerticalButtonsView
        type={ITypes.secondary}
        onPress={() => console.log('onPress')}
        text={'text'}>
        <Button text={'textTwo'} />
      </VerticalButtonsView>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

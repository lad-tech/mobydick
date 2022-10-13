import {render} from '@testing-library/react-native';
import {ITypes} from '@npm/mobydick-cta';
import React from 'react';

import VerticalButtonsView from '../VerticalButtonsView';

describe('@npm/mobydick-popups/modalBase', () => {
  it('should renders correctly VerticalButtonsView one button ', () => {
    const {toJSON} = render(
      <VerticalButtonsView
        typeOne={ITypes.destructive}
        onPressOne={() => console.log('onPress')}
        textOne={'text'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly VerticalButtonsView secondary ', () => {
    const {toJSON} = render(
      <VerticalButtonsView
        typeOne={ITypes.secondary}
        onPressOne={() => console.log('onPress')}
        textOne={'text'}
        typeTwo={ITypes.secondary}
        onPressTwo={() => console.log('onPress')}
        textTwo={'text'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

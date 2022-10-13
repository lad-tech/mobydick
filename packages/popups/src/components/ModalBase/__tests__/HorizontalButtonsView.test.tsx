import {render} from '@testing-library/react-native';
import React from 'react';
import {ITypes} from '@npm/mobydick-cta';

import HorizontalButtonsView from '../HorizontalButtonsView';

describe('@npm/mobydick-popups/modalBase', () => {
  it('should renders correctly HorizontalButtonsView destructive ', () => {
    const {toJSON} = render(
      <HorizontalButtonsView
        typeLeft={ITypes.destructive}
        onPressLeft={() => console.log('onPressLeft')}
        textLeft={'textLeft'}
        typeRight={ITypes.destructive}
        onPressRight={() => console.log('onPressRight')}
        textRight={'textRight'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly HorizontalButtonsView secondary ', () => {
    const {toJSON} = render(
      <HorizontalButtonsView
        typeLeft={ITypes.secondary}
        onPressLeft={() => console.log('onPressLeft')}
        textLeft={'textLeft'}
        typeRight={ITypes.secondary}
        onPressRight={() => console.log('onPressRight')}
        textRight={'textRight'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly HorizontalButtonsView tertiary ', () => {
    const {toJSON} = render(
      <HorizontalButtonsView
        typeLeft={ITypes.tertiary}
        onPressLeft={() => console.log('onPressLeft')}
        textLeft={'textLeft'}
        typeRight={ITypes.tertiary}
        onPressRight={() => console.log('onPressRight')}
        textRight={'textRight'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly HorizontalButtonsView primary ', () => {
    const {toJSON} = render(
      <HorizontalButtonsView
        typeLeft={ITypes.primary}
        onPressLeft={() => console.log('onPressLeft')}
        textLeft={'textLeft'}
        typeRight={ITypes.primary}
        onPressRight={() => console.log('onPressRight')}
        textRight={'textRight'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

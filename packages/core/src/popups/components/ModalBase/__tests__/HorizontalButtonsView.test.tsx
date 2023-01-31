import {render} from '@testing-library/react-native';
import React from 'react';

import {IButtonTypes} from '../../../../cta/components/Button/types';
import HorizontalButtonsView from '../HorizontalButtonsView';

describe('@npm/mobydick-core/modalBase', () => {
  it('should renders correctly HorizontalButtonsView destructive', () => {
    const {toJSON} = render(
      <HorizontalButtonsView
        typeLeft={IButtonTypes.destructive}
        onPressLeft={() => console.log('onPressLeft')}
        textLeft={'textLeft'}
        typeRight={IButtonTypes.destructive}
        onPressRight={() => console.log('onPressRight')}
        textRight={'textRight'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly HorizontalButtonsView secondary', () => {
    const {toJSON} = render(
      <HorizontalButtonsView
        typeLeft={IButtonTypes.secondary}
        onPressLeft={() => console.log('onPressLeft')}
        textLeft={'textLeft'}
        typeRight={IButtonTypes.secondary}
        onPressRight={() => console.log('onPressRight')}
        textRight={'textRight'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should renders correctly HorizontalButtonsView tertiary', () => {
    const {toJSON} = render(
      <HorizontalButtonsView
        typeLeft={IButtonTypes.tertiary}
        onPressLeft={() => console.log('onPressLeft')}
        textLeft={'textLeft'}
        typeRight={IButtonTypes.tertiary}
        onPressRight={() => console.log('onPressRight')}
        textRight={'textRight'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly HorizontalButtonsView primary', () => {
    const {toJSON} = render(
      <HorizontalButtonsView
        typeLeft={IButtonTypes.primary}
        onPressLeft={() => console.log('onPressLeft')}
        textLeft={'textLeft'}
        typeRight={IButtonTypes.primary}
        onPressRight={() => console.log('onPressRight')}
        textRight={'textRight'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

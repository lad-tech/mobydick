import {render} from '@testing-library/react-native';
import {IButtonTypes} from '@npm/mobydick-cta';
import React from 'react';

import VerticalButtonsView from '../VerticalButtonsView';
import VerticalButton from '../VerticalButton';

describe('@npm/mobydick-popups/modalBase', () => {
  it('should renders correctly VerticalButtonsView one button ', () => {
    const {toJSON} = render(
      <VerticalButtonsView>
        <VerticalButton
          type={IButtonTypes.destructive}
          onPress={() => console.log('onPress')}
          text={'text'}
        />
      </VerticalButtonsView>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

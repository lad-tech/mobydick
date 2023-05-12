import {render} from '@testing-library/react-native';
import React from 'react';

import ChatPressableIcon from '../ChatPressableIcon';

describe('@npm/mobydick-core/ChatPressableIcon', () => {
  it('renders correctly', () => {
    const {toJSON} = render(
      <ChatPressableIcon name={'icon-location'} onPress={() => null} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with props', () => {
    const {toJSON} = render(
      <ChatPressableIcon
        name={'icon-location'}
        onPress={() => null}
        color={'red'}
        backgroundColor={'black'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

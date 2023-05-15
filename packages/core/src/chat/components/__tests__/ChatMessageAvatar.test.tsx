import {render} from '@testing-library/react-native';
import React from 'react';

import ChatMessageAvatar from '../ChatMessageAvatar';
const userWithoutPhoto = {
  firstName: 'Иван',
  lastName: 'Пушкин',
};

describe('@npm/mobydick-core/ChatMessageAvatar', () => {
  it('renders correctly isNotMe', () => {
    const {toJSON} = render(
      <ChatMessageAvatar
        user={userWithoutPhoto}
        message={'message'}
        isMe={false}
        time={'12:12'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly onPress', () => {
    const {toJSON} = render(
      <ChatMessageAvatar
        onPress={() => null}
        user={userWithoutPhoto}
        message={'message'}
        isMe={true}
        time={'12:12'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

import {render} from '@testing-library/react-native';
import React from 'react';

import ChatMessage from '../ChatMessage';

describe('@npm/mobydick-core/ChatMessage', () => {
  it('renders correctly isNotMe', () => {
    const {toJSON} = render(
      <ChatMessage message={'message'} isMe={false} time={'12:12'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly isMe', () => {
    const {toJSON} = render(
      <ChatMessage message={'message'} isMe={true} time={'12:12'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly isMe image', () => {
    const {toJSON} = render(
      <ChatMessage
        image={'https://vraki.net/sites/default/files/inline/images/30_55.jpg'}
        isMe={true}
        time={'12:12'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly isMe image number two', () => {
    const fileHandle = 42;
    const {toJSON} = render(
      <ChatMessage image={fileHandle} isMe={true} time={'12:12'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly  isNotValid time', () => {
    const {toJSON} = render(
      <ChatMessage message={'message'} time={'12:98'} isMe={false} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});

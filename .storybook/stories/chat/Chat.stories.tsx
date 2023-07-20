import React from 'react';

import CenterView from '../CenterView';

import ChatExample from './ChatExample';

export default {
  title: 'Design System/Chat',
  decorators: [getStory => <CenterView>{getStory()}</CenterView>],
};

export const Chat = () => <ChatExample />;

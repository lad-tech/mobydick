import React from 'react';

import CenterView from './CenterView';

export const decorators = [
  // Using a decorator to apply padding for every story
  (StoryFn: () => React.ReactElement) => (
    <CenterView>
      <StoryFn />
    </CenterView>
  ),
];

export const parameters = {
  my_param: 'anything',
};

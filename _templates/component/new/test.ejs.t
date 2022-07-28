---
to: <%= path %>/components/<%= name %>/__tests__/<%= name %>.test.tsx
---
import React from 'react';
import {render} from '@testing-library/react-native';

import <%= name %> from '../<%= name %>';

describe('<%= name %>', () => {
  test('render correctly', () => {
    const {toJSON} = render(<<%= name %> />);
    expect(toJSON()).toMatchSnapshot();
  });
});

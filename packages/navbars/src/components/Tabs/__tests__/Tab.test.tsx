import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {View} from '@npm/mobydick-core';

import Tab from '../Tab';
import {accessibilityLabels} from '../constants';

describe('Tab', () => {
  test('render correctly with props', () => {
    const {toJSON, getByLabelText} = render(
      <Tab
        item={{
          value: '1',
          onPress: () => null,
          leftIcon: <View />,
          rightIcon: <View />,
        }}
        active={true}
        backgroundColorTab={'#000'}
        fontTab={'Regular-Error-H3'}
      />,
    );
    const tab = getByLabelText(accessibilityLabels.tab);

    fireEvent.press(tab);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render correctly active false', () => {
    const {toJSON, getByLabelText} = render(
      <Tab
        item={{
          value: '1',
          onPress: () => null,
        }}
        active={false}
      />,
    );
    const tab = getByLabelText(accessibilityLabels.tab);

    fireEvent.press(tab);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render correctly active true', () => {
    const {toJSON, getByLabelText} = render(
      <Tab
        item={{
          value: '1',
          onPress: () => null,
        }}
        active={true}
      />,
    );
    const tab = getByLabelText(accessibilityLabels.tab);

    fireEvent.press(tab);
    expect(toJSON()).toMatchSnapshot();
  });
});

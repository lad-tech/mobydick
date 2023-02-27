import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import Tab from '../Tab';
import View from '../../../../basic/components/View/View';
import {LABELS} from '../../../../other';

describe('Tab', () => {
  const value = 1;
  const label = '1';

  test('render correctly with props', () => {
    const {toJSON, getByLabelText} = render(
      <Tab
        item={{
          label: label,
          value: value,
          onPress: () => null,
          leftIcon: <View />,
          rightIcon: <View />,
        }}
        active={true}
        backgroundColorTab={'#fff000'}
        fontTab={'Medium-Accent-H1'}
      />,
    );
    const tab = getByLabelText(LABELS.tab);

    fireEvent.press(tab);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render correctly active false', () => {
    const {toJSON, getByLabelText} = render(
      <Tab
        item={{
          label: label,
          value: value,
        }}
        active={false}
      />,
    );
    const tab = getByLabelText(LABELS.tab);

    fireEvent.press(tab);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render correctly active true', () => {
    const {toJSON, getByLabelText} = render(
      <Tab
        item={{
          label: label,
          value: value,
        }}
        onPressCommon={item => console.log(item)}
        active={true}
      />,
    );
    const tab = getByLabelText(LABELS.tab);

    fireEvent.press(tab);
    expect(toJSON()).toMatchSnapshot();
  });
});

import {render} from '@testing-library/react-native';
import React from 'react';

import Tabs from '../Tabs';

describe('Tabs', () => {
  const list = [{value: '1', onPress: () => null}];

  test('render correctly', () => {
    const {toJSON} = render(<Tabs list={list} activeValue={'1'} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render correctly with props', () => {
    const {toJSON} = render(
      <Tabs
        list={list}
        activeValue={'1'}
        backgroundColorTab={'#000'}
        contentContainerStyle={{flex: 1}}
        containerStyle={{flex: 2}}
        fontTab={'Regular-Error-H3'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

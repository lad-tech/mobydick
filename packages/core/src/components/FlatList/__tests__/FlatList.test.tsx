import React from 'react';
import {render} from '@testing-library/react-native';
import {array} from '@storybook/addon-knobs';

import FlatList from '../FlatList';
import Text from '../../Text/Text';

describe('@npm/mobydick-core/FlatList', () => {
  it('renders correctly', () => {
    const renderItem = ({item}: {item: string}) => {
      return <Text>{item}</Text>;
    };
    const {toJSON} = render(
      <FlatList
        data={array('data', ['1', '2', '3'])}
        renderItem={renderItem}
        keyExtractor={(item: string, index: number) =>
          item.toString() + index.toString()
        }
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {Tabs} from '@npm/mobydick-navbars';

import CenterView from '../CenterView';

const TabsExample = () => {
  const [defaultValue, setDefaultValue] = useState('one');
  const onPress = (value: string) => {
    setDefaultValue(value);
  };

  const list = [
    {
      value: 'one',
      onPress: () => onPress('one'),
    },
    {
      value: 'two',
      onPress: () => onPress('two'),
    },
    {
      value: 'three',
      onPress: () => onPress('three'),
    },
    {
      value: 'four',
      onPress: () => onPress('four'),
    },
    {
      value: 'five',
      onPress: () => onPress('five'),
    },
    {
      value: 'six',
      onPress: () => onPress('six'),
    },
    {
      value: 'seven',
      onPress: () => onPress('seven'),
    },
    {
      value: 'eight',
      onPress: () => onPress('eight'),
    },
    {
      value: 'nine',
      onPress: () => onPress('nine'),
    },
    {
      value: 'ten',
      onPress: () => onPress('ten'),
    },
  ];
  return <Tabs list={list} activeValue={defaultValue} />;
};

storiesOf('Design system/Navbars', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Tabs', () => <TabsExample />);

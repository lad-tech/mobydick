import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {Tabs} from '@npm/mobydick-navbars';

import CenterView from '../CenterView';

enum exampleList {
  one = 'one',
  two = 'two',
  three = 'three',
  four = 'four',
  five = 'five',
  six = 'six',
  seven = 'seven',
  eight = 'eight',
  nine = 'nine',
  ten = 'ten',
}

const TabsExample = () => {
  const [defaultValue, setDefaultValue] = useState('one');
  const onPress = (value: string) => {
    setDefaultValue(value);
  };

  const list = [
    {
      value: exampleList.one,
      onPress: () => onPress(exampleList.one),
    },
    {
      value: exampleList.two,
      onPress: () => onPress(exampleList.two),
    },
    {
      value: exampleList.three,
      onPress: () => onPress(exampleList.three),
    },
    {
      value: exampleList.four,
      onPress: () => onPress(exampleList.four),
    },
    {
      value: exampleList.five,
      onPress: () => onPress(exampleList.five),
    },
    {
      value: exampleList.six,
      onPress: () => onPress(exampleList.six),
    },
    {
      value: exampleList.seven,
      onPress: () => onPress(exampleList.seven),
    },
    {
      value: exampleList.eight,
      onPress: () => onPress(exampleList.eight),
    },
    {
      value: exampleList.nine,
      onPress: () => onPress(exampleList.nine),
    },
    {
      value: exampleList.ten,
      onPress: () => onPress(exampleList.ten),
    },
  ];
  return <Tabs list={list} activeValue={defaultValue} />;
};

storiesOf('Design system/Navbars', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Tabs', () => <TabsExample />);

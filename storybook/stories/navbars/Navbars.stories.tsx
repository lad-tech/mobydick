import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {ITab, Tabs} from '@npm/mobydick-navbars';

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
  const [defaultValue, setDefaultValue] = useState<string | number>(1);
  const onPress = (item: ITab) => {
    setDefaultValue(item.value);
  };
  const list = [
    {
      value: 1,
      label: exampleList.one,
    },
    {
      value: 2,
      label: exampleList.two,
    },
    {
      value: 3,
      label: exampleList.three,
    },
    {
      value: 4,
      label: exampleList.four,
    },
    {
      value: 5,
      label: exampleList.five,
    },
    {
      value: 6,
      label: exampleList.six,
    },
    {
      value: 7,
      label: exampleList.seven,
    },
    {
      value: 8,
      label: exampleList.eight,
    },
    {
      value: 9,
      label: exampleList.nine,
    },
    {
      value: 10,
      label: exampleList.ten,
    },
  ];
  return (
    <Tabs list={list} activeValue={defaultValue} onPressCommon={onPress} />
  );
};

storiesOf('Design system/Navbars', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Tabs', () => <TabsExample />);

import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {SimpleIcon} from '@npm/mobydick-styles';
import {Tabs} from '@npm/mobydick-navbars';

import CenterView from '../CenterView';

const TabsExample = () => {
  const list = [
    {
      value: 'one',
      onPress: () => console.log('one'),
      leftIcon: <SimpleIcon name={'icon-account'} size={14} />,
    },
    {
      value: 'two',
      onPress: () => console.log('two'),
      leftIcon: <SimpleIcon name={'icon-account'} size={14} />,
    },
  ];
  return <Tabs list={list} />;
};

storiesOf('Design system/Navbars', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Tabs', () => <TabsExample />);

import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {Search} from '@npm/mobydick-inputs';

import CenterView from '../../CenterView';

const ExampleSearch = () => {
  const [value, setValue] = useState('');

  return <Search value={value} onChangeText={setValue} />;
};
storiesOf('Design System/Inputs/Search', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <ExampleSearch />);

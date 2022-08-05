import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {Search} from '@npm/mobydick-inputs';
import {iconNames, SimpleIcon, useTheme} from '@npm/mobydick-styles';
import {select} from '@storybook/addon-knobs';

import CenterView from '../../CenterView';

const ExampleSearch = () => {
  const [value, setValue] = useState('');
  const {colors} = useTheme();

  return (
    <Search
      value={value}
      onChangeText={setValue}
      containerStyle={{
        backgroundColor: select('backgroundColor', colors, colors.BgSecondary),
      }}
      textInputContainerStyle={{
        color: select('textInputColor', colors, colors.TextTertiary),
      }}
      leftIcon={
        <SimpleIcon name={select('left icon', iconNames, 'icon-search')} />
      }
    />
  );
};
storiesOf('Design System/Inputs/Search', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <ExampleSearch />);

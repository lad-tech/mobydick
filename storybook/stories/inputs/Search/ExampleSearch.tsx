import React, {useState} from 'react';
import {Search} from '@npm/mobydick-inputs';
import {iconNames, SimpleIcon} from '@npm/mobydick-styles';
import {select} from '@storybook/addon-knobs';

const ExampleSearch = () => {
  const [value, setValue] = useState('');

  return (
    <Search
      value={value}
      onChangeText={setValue}
      leftIcon={
        <SimpleIcon name={select('left icon', iconNames, 'icon-search')} />
      }
    />
  );
};

export default ExampleSearch;

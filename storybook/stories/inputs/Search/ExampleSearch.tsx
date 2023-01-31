import React, {useState} from 'react';
import {select} from '@storybook/addon-knobs';

import {Search, iconNames, SimpleIcon} from '@npm/mobydick-core';
import {useDebounce} from '@npm/mobydick-utils';

const ExampleSearch = () => {
  const [value, setValue] = useState('');
  const debouncedFn = useDebounce(
    (valueFn: string) => console.log('value', valueFn),
    1000,
  );

  const onChangeText = (text: string) => {
    setValue(text);
    debouncedFn(text);
  };

  return (
    <Search
      value={value}
      onChangeText={onChangeText}
      leftIcon={
        <SimpleIcon name={select('left icon', iconNames, 'icon-search')} />
      }
    />
  );
};

export default ExampleSearch;

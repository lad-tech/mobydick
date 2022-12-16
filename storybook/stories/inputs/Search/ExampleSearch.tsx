import React, {useState} from 'react';
import {Search} from '@npm/mobydick-inputs';
import {iconNames, SimpleIcon} from '@npm/mobydick-styles';
import {select} from '@storybook/addon-knobs';
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

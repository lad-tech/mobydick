import React, {useState} from 'react';

import {Search, SimpleIcon, SimpleIconName} from '@lad-tech/mobydick-core';
import {useDebounce} from '@lad-tech/mobydick-utils';

const ExampleSearch = ({leftIcon}: {leftIcon: SimpleIconName}) => {
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
      leftIcon={<SimpleIcon name={leftIcon} />}
    />
  );
};

export default ExampleSearch;

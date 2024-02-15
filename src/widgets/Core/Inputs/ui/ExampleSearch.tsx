import {useState} from 'react';

import {useDebounce} from 'shared/lib';
import {createStyles, Search, SimpleIcon, useStyles, View} from 'shared/ui';
import Header from 'shared/ui/Header';

const ExampleSearch = () => {
  const [styles] = useStyles(styleSource);
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
    <View style={styles.wrapper}>
      <Header title={'Search:'} />
      <Search
        value={value}
        onChangeText={onChangeText}
        leftIcon={<SimpleIcon name={'icon-search'} />}
      />
    </View>
  );
};

const styleSource = createStyles(({spaces}) => ({
  wrapper: {
    gap: spaces.Space12,
  },
}));

export default ExampleSearch;

import {useState} from 'react';
import {StyleSheet} from 'react-native';

import Header from './Header';

import {DropDown} from 'shared/ui';

const DropDownExample = () => {
  const [language, setLanguage] = useState<number>();

  const list = [
    {
      value: 1,
      label: 'Russian',
    },
    {
      value: 2,
      label: 'English',
    },
    {
      value: 3,
      label: 'German',
    },
  ];

  return (
    <>
      <Header title={'DropDown:'} />
      <DropDown
        title={'Select language'}
        selectedItem={language}
        placeholder={'Choose language:'}
        list={list}
        onPress={setLanguage}
        buttonStyle={styles.buttonStyle}
        flatListStyle={styles.flatListStyle}
      />
    </>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
  },
  flatListStyle: {
    width: '95%',
  },
});

export default DropDownExample;

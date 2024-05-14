import {useState} from 'react';

import Header from '@shared/ui/Header';
import {createStyles, DropDown, IListItem, useStyles} from '@shared/ui';

const DropDownExample = () => {
  const [language, setLanguage] = useState<number>();
  const [styles] = useStyles(createStylesFn);

  const [programmingLanguages, setProgrammingLanguages] = useState<
    IListItem<number>[]
  >([]);

  const languageList = [
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

  const programmingLanguageList = [
    {
      value: 1,
      label: 'JavaScript',
    },
    {
      value: 2,
      label: 'Kotlin',
    },
    {
      value: 3,
      label: 'Swift',
    },
    {
      value: 4,
      label: 'Rust',
    },
    {
      value: 5,
      label: 'C++',
    },
    {
      value: 6,
      label: 'COBOL',
    },
  ];

  return (
    <>
      <Header title={'DropDown:'} />

      <DropDown
        isMultiselect
        title={'Select your favorite programming languages:'}
        selectedItem={programmingLanguages}
        placeholder={'Select language'}
        list={programmingLanguageList}
        onPress={setProgrammingLanguages}
        buttonStyle={styles.buttonStyle}
        flatListStyle={styles.flatListStyle}
      />

      <DropDown
        title={'Select language:'}
        selectedItem={language}
        placeholder={'Select language'}
        list={languageList}
        onPress={setLanguage}
        buttonStyle={styles.buttonStyle}
        flatListStyle={styles.flatListStyle}
      />
    </>
  );
};

const createStylesFn = createStyles(_ => ({
  buttonStyle: {
    width: '100%',
  },
  flatListStyle: {
    width: '95%',
  },
}));

export default DropDownExample;

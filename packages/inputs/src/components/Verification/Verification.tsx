import {View} from '@npm/mobydick-core';
import React from 'react';
import {useStyles} from '@npm/mobydick-styles';

import CodeField from './CodeField';
import stylesCreate from './stylesCreate';

const Verification = () => {
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={styles.container}>
      <CodeField />
      <CodeField />
      <CodeField />
      <CodeField />
    </View>
  );
};

export default Verification;

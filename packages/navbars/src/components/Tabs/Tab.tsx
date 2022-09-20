import React from 'react';
import {TouchableOpacity} from '@npm/mobydick-core';
import {Typography} from '@npm/mobydick-typography';
import {useStyles} from '@npm/mobydick-styles';

import {ITab} from '../../types';

import stylesCreate from './stylesCreate';

const Tab = ({item}: {item: ITab}): JSX.Element => {
  const [styles] = useStyles(stylesCreate);

  return (
    <TouchableOpacity onPress={item.onPress} style={styles.tab}>
      {item.leftIcon ? item.leftIcon : null}
      <Typography font={'Regular-Tertiary-XS'}>{item.value}</Typography>
    </TouchableOpacity>
  );
};

export default Tab;

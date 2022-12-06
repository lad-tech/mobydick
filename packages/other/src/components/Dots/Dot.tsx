import React from 'react';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';

interface IDot {
  active: boolean;
}

const Dot = ({active}: IDot): JSX.Element => {
  const [styles] = useStyles(stylesCreate, active);

  return <View style={[styles.dot]} />;
};

export default Dot;

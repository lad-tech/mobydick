import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {View} from '@npm/mobydick-core';

import stylesCreate from './stylesCreate';
import {IArrowViewPopup} from './types';

const Arrow: FC<IArrowViewPopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {arrowViewStyles} = props;

  return <View style={[styles.arrow, arrowViewStyles]} />;
};

export default Arrow;

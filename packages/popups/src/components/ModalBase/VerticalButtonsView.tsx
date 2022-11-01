import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {View} from '@npm/mobydick-core';

import stylesCreate from './stylesCreate';

const VerticalButtonsView: FC = props => {
  const [styles] = useStyles(stylesCreate);
  const {children} = props;

  return <View style={styles.verticalButtonsView}>{children}</View>;
};

export default VerticalButtonsView;

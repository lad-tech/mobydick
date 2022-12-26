import React from 'react';

import useStyles from '../../../styles/theme/hooks/useStyles';
import View from '../../../basic/components/View/View';

import stylesCreate from './stylesCreate';

interface IDot {
  active: boolean;
  size: number;
}

const Dot = ({active, size}: IDot): JSX.Element => {
  const [styles] = useStyles(stylesCreate, size, active);

  return <View style={[styles.dot]} />;
};

export default Dot;

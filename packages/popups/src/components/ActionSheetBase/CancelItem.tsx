import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import Item, {IPropsItem} from './Item';

const CancelItem: FC<IPropsItem> = props => {
  const [styles] = useStyles(stylesCreate);

  return <Item style={styles.cancelItem} {...props} />;
};

export default CancelItem;
import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import Item, {IPropsItem} from './Item';

const LastItem: FC<IPropsItem> = props => {
  const [styles] = useStyles(stylesCreate);

  return <Item style={styles.lastItem} {...props} />;
};

export default LastItem;

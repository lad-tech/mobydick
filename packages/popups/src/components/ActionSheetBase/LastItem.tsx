import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import Item, {IPropsItem} from './Item';

const LastItem: FC<IPropsItem> = props => {
  const [styles] = useStyles(stylesCreate);
  const {...otherProps} = props;
  return <Item style={styles.lastItem} {...otherProps} />;
};

export default LastItem;

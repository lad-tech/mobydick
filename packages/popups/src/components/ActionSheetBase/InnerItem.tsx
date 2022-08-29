import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import Item, {IPropsItem} from './Item';
import Label, {IPropsLabel} from './Label';

const InnerItem: FC<IPropsItem | IPropsLabel> = props => {
  const [styles] = useStyles(stylesCreate);
  const {label, ...otherProps} = props;
  return label ? (
    <Label style={styles.innerItem} label={label} {...otherProps} />
  ) : (
    <Item style={styles.innerItem} {...otherProps} />
  );
};

export default InnerItem;

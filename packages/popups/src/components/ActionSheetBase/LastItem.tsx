import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import {IPropsItem} from './Item';

import {ActionSheetBase} from './index';

const LastItem: FC<IPropsItem> = props => {
  const [styles] = useStyles(stylesCreate);
  const {...otherProps} = props;
  return <ActionSheetBase.Item style={styles.lastItem} {...otherProps} />;
};

export default LastItem;

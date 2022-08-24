import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import {IPropsItem} from './Item';
import {IPropsLabel} from './Label';

import {ActionSheetBase} from './index';

const FirstItem: FC<IPropsItem | IPropsLabel> = props => {
  const [styles] = useStyles(stylesCreate);
  const {label, ...otherProps} = props;
  return label ? (
    <ActionSheetBase.Label
      style={styles.firstItem}
      label={label}
      {...otherProps}
    />
  ) : (
    <ActionSheetBase.Item style={styles.firstItem} {...otherProps} />
  );
};

export default FirstItem;

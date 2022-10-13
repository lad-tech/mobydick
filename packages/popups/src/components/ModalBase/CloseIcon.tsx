import React, {FC} from 'react';
import {SimpleIcon, useStyles} from '@npm/mobydick-styles';
import {TouchableOpacity} from '@npm/mobydick-core';

import {IPopupCloseIcon} from '../PopupBase';

import stylesCreate from './stylesCreate';

const CloseIcon: FC<IPopupCloseIcon> = props => {
  const [styles] = useStyles(stylesCreate);
  const {onPress} = props;

  return (
    <TouchableOpacity style={styles.closeButton} onPress={onPress}>
      <SimpleIcon name={'icon-cancel'} />
    </TouchableOpacity>
  );
};

export default CloseIcon;

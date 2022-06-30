import React, {FC} from 'react';
import {Exit, useStyles} from '@npm/mobydick-styles';
import stylesCreate from '@npm/mobydick-popups/src/components/PopupBase/stylesCreate';
import {TouchableOpacity} from '@npm/mobydick-core';
import {IPopupCloseIcon} from '@npm/mobydick-popups/src/components/PopupBase/types';

const CloseIcon: FC<IPopupCloseIcon> = props => {
  const [styles] = useStyles(stylesCreate);
  const {onPress} = props;

  return (
    <TouchableOpacity style={styles.closeButton} onPress={onPress}>
      <Exit fill={styles.closeButton.fill} />
    </TouchableOpacity>
  );
};

export default CloseIcon;

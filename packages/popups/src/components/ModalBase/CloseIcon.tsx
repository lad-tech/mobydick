import React, {FC} from 'react';
import {Exit, useStyles, useTheme} from '@npm/mobydick-styles';
import {TouchableOpacity} from '@npm/mobydick-core';

import {IPopupCloseIcon} from '../PopupBase';
import stylesCreate from '../PopupBase/stylesCreate';

const CloseIcon: FC<IPopupCloseIcon> = props => {
  const [styles] = useStyles(stylesCreate);
  const {onPress} = props;
  const {colors} = useTheme();

  return (
    <TouchableOpacity style={styles.closeButton} onPress={onPress}>
      <Exit fill={colors.IconNeutral} />
    </TouchableOpacity>
  );
};

export default CloseIcon;

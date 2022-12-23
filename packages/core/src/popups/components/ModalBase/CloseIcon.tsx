import React, {FC} from 'react';

import {IPopupCloseIcon} from '../PopupBase';
import useStyles from '../../../styles/theme/hooks/useStyles';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import SimpleIcon from '../../../styles/icons/font/SimpleIcon';

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

import React, {FC} from 'react';
import {Exit, useStyles} from '@npm/mobydick-styles';
import stylesCreate from '@npm/mobydick-popups/src/components/PopupBase/stylesCreate';
import {View} from '@npm/mobydick-core';
import {IPopupCloseIcon} from '@npm/mobydick-popups/src/components/PopupBase/types';

const CloseIcon: FC<IPopupCloseIcon> = props => {
  const [styles] = useStyles(stylesCreate);
  const {onPress} = props;

  return (
    <View style={styles.exitView}>
      <Exit style={styles.exitSvg} onPress={onPress} />
    </View>
  );
};

export default CloseIcon;

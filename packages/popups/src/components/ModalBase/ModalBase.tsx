import React, {FC} from 'react';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import stylesCreate from '@npm/mobydick-popups/src/components/PopupBase/stylesCreate';
import {IPopup} from '@npm/mobydick-popups';

const ModalBase: FC<IPopup> = props => {
  const {children} = props;
  const [styles] = useStyles(stylesCreate);

  return <View style={[styles.container]}>{children}</View>;
};

export default ModalBase;

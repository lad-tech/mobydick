import React, {FC} from 'react';
import {Text, View} from '@npm/mobydick-core';
import {IPopupModal} from '@npm/mobydick-popups/src/components/PopupModal/types';
import {Exit, useStyles} from '@npm/mobydick-styles';
import stylesCreate from '@npm/mobydick-popups/src/components/PopupModal/stylesCreate';

const PopupModal: FC<IPopupModal> = props => {
  const [styles] = useStyles(stylesCreate);
  const {style, isExitIcon, title, titleStyles, children} = props;

  return (
    <View style={[styles.container, style]}>
      {isExitIcon && (
        <View style={styles.exitView}>
          <Exit style={styles.exitSvg} />
        </View>
      )}

      {title && <Text style={[styles.title, titleStyles]}>{title}</Text>}
      {children}
    </View>
  );
};

export default PopupModal;

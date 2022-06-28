import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import stylesCreate from '@npm/mobydick-popups/src/components/PopupBase/stylesCreate';
import {Text} from '@npm/mobydick-core';
import {ITitlePopup} from '@npm/mobydick-popups/src/components/PopupBase/types';

const Title: FC<ITitlePopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {title, titleStyles} = props;

  return <Text style={[styles.title, titleStyles]}>{title}</Text>;
};

export default Title;

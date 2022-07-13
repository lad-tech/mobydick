import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Text} from '@npm/mobydick-core';

import {ITitlePopup} from '../PopupBase';

import stylesCreate from './stylesCreate';

const Title: FC<ITitlePopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {title, titleStyles} = props;

  return <Text style={[styles.title, titleStyles]}>{title}</Text>;
};

export default Title;

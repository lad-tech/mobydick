import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

import stylesCreate from '../PopupBase/stylesCreate';
import {ITitlePopup} from '../PopupBase';

const Title: FC<ITitlePopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {title, titleStyles, titleFont} = props;

  return (
    <Typography
      style={[styles.title, titleStyles]}
      font={titleFont ? titleFont : 'SemiBold-Primary-H4'}>
      {title}
    </Typography>
  );
};

export default Title;

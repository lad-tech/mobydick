import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';

import {ITitlePopup} from '../PopupBase';
import {Typography} from '../../../../typography';

import stylesCreate from './stylesCreate';

const Title: FC<ITitlePopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {title, titleStyles, titleFont} = props;

  return (
    <Typography
      font={titleFont ? titleFont : 'Regular-Primary-XS'}
      style={[styles.title, titleStyles]}>
      {title}
    </Typography>
  );
};

export default Title;

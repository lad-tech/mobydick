import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

import {ITitlePopup} from '../PopupBase';

import stylesCreate from './stylesCreate';

/**
 * @deprecated use TextContent.tsx
 */

const Title: FC<ITitlePopup> = props => {
  const {title, titleStyles, titleFont} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <Typography
      style={[styles.text, titleStyles]}
      font={titleFont ? titleFont : 'SemiBold-Primary-L'}>
      {title}
    </Typography>
  );
};

export default Title;

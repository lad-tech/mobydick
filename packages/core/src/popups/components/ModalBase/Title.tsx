import React, {FC} from 'react';

import {ITitlePopup} from '../PopupBase';
import useStyles from '../../../styles/theme/hooks/useStyles';
import {Typography} from '../../../typography/components/Typography/Typography';

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

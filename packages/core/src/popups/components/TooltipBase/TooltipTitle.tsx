import {FC} from 'react';

import {ITitlePopup} from '../PopupBase';
import useStyles from '../../../styles/hooks/useStyles';
import {Typography} from '../../../typography';

import stylesCreate from './stylesCreate';

const TooltipTitle: FC<ITitlePopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {title, titleStyles, titleFont} = props;

  return (
    <Typography
      font={titleFont ? titleFont : 'SemiBold-Inverse-S'}
      style={[styles.title, titleStyles]}>
      {title}
    </Typography>
  );
};

export default TooltipTitle;

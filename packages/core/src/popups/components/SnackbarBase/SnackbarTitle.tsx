import {FC} from 'react';

import useStyles from '../../../styles/hooks/useStyles';
import {ITitlePopup} from '../PopupBase';
import {Typography} from '../../../typography';

import stylesCreate from './stylesCreate';

const SnackbarTitle: FC<ITitlePopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {title, titleStyles, titleFont} = props;

  return (
    <Typography
      style={[styles.title, titleStyles]}
      font={titleFont ? titleFont : 'Medium-Inverse-S'}>
      {title}
    </Typography>
  );
};

export default SnackbarTitle;

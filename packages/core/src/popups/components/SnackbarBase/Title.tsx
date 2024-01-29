import {FC} from 'react';

import useStyles from '../../../styles/hooks/useStyles';
import {Typography} from '../../../typography/components/Typography/Typography';
import {ITitlePopup} from '../PopupBase';

import stylesCreate from './stylesCreate';

const Title: FC<ITitlePopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {title, titleStyles, titleFont} = props;

  return (
    <Typography
      style={[styles.title, titleStyles]}
      font={titleFont ? titleFont : 'Medium-Contrast-XS'}>
      {title}
    </Typography>
  );
};

export default Title;

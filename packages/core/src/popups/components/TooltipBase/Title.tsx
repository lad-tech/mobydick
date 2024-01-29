import {FC} from 'react';

import {ITitlePopup} from '../PopupBase';
import useStyles from '../../../styles/hooks/useStyles';
import {Typography} from '../../../typography/components/Typography/Typography';

import stylesCreate from './stylesCreate';

const Title: FC<ITitlePopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {title, titleStyles, titleFont} = props;

  return (
    <Typography
      font={titleFont ? titleFont : 'SemiBold-Contrast-XS'}
      style={[styles.title, titleStyles]}>
      {title}
    </Typography>
  );
};

export default Title;

import {FC} from 'react';

import useStyles from '../../../styles/hooks/useStyles';
import {TypographyLegacy} from '../../../typography/components/TypographyLegacy/TypographyLegacy';
import {ITitlePopup} from '../PopupBase';

import stylesCreate from './stylesCreate';

const SnackbarTitle: FC<ITitlePopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {title, titleStyles, titleFont} = props;

  return (
    <TypographyLegacy
      style={[styles.title, titleStyles]}
      font={titleFont ? titleFont : 'Medium-Contrast-XS'}>
      {title}
    </TypographyLegacy>
  );
};

export default SnackbarTitle;

import {FC} from 'react';

import {ITitlePopup} from '../PopupBase';
import useStyles from '../../../styles/hooks/useStyles';
import {TypographyLegacy} from '../../../typography/components/TypographyLegacy/TypographyLegacy';

import stylesCreate from './stylesCreate';

const TooltipTitle: FC<ITitlePopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {title, titleStyles, titleFont} = props;

  return (
    <TypographyLegacy
      font={titleFont ? titleFont : 'SemiBold-Contrast-XS'}
      style={[styles.title, titleStyles]}>
      {title}
    </TypographyLegacy>
  );
};

export default TooltipTitle;

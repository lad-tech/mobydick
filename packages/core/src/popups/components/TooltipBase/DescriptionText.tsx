import {FC} from 'react';

import {IDescriptionTextPopup} from '../PopupBase';
import useStyles from '../../../styles/hooks/useStyles';
import {TypographyLegacy} from '../../../typography';

import stylesCreate from './stylesCreate';

const DescriptionText: FC<IDescriptionTextPopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {descriptionText, descriptionStyles, descriptionFont} = props;

  return (
    <TypographyLegacy
      font={descriptionFont ? descriptionFont : 'Regular-Contrast-XS'}
      style={[styles.descriptionText, descriptionStyles]}>
      {descriptionText}
    </TypographyLegacy>
  );
};

export default DescriptionText;

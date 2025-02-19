import {FC} from 'react';

import {IDescriptionTextPopup} from '../PopupBase';
import useStyles from '../../../styles/hooks/useStyles';
import {Typography} from '../../../typography';

import stylesCreate from './stylesCreate';

const DescriptionText: FC<IDescriptionTextPopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {descriptionText, descriptionStyles, descriptionFont} = props;

  return (
    <Typography
      font={descriptionFont ? descriptionFont : 'Regular-Inverse-S'}
      style={[styles.descriptionText, descriptionStyles]}>
      {descriptionText}
    </Typography>
  );
};

export default DescriptionText;

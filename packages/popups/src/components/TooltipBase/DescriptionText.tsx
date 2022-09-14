import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';

import {IDescriptionTextPopup} from '../PopupBase';
import {Typography} from '../../../../typography';

import stylesCreate from './stylesCreate';

const DescriptionText: FC<IDescriptionTextPopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {descriptionText, descriptionStyles, descriptionFont} = props;

  return (
    <Typography
      font={descriptionFont ? descriptionFont : 'Regular-Tertiary-XS'}
      style={[styles.descriptionText, descriptionStyles]}>
      {descriptionText}
    </Typography>
  );
};

export default DescriptionText;

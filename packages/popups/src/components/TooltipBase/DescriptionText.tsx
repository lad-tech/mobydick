import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

import {IDescriptionTextPopup} from '../PopupBase';

import stylesCreate from './stylesCreate';

const DescriptionText: FC<IDescriptionTextPopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {descriptionText, descriptionStyles, descriptionFont} = props;

  return (
    <Typography
      font={descriptionFont ? descriptionFont : 'Regular-Contrast-XS'}
      style={[styles.descriptionText, descriptionStyles]}>
      {descriptionText}
    </Typography>
  );
};

export default DescriptionText;

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
      style={[styles.text, descriptionStyles]}
      font={descriptionFont ? descriptionFont : 'Regular-Tertiary-XS'}>
      {descriptionText}
    </Typography>
  );
};

export default DescriptionText;

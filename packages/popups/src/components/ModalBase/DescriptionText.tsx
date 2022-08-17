import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

import {IDescriptionTextPopup} from '../PopupBase';
import stylesCreate from '../PopupBase/stylesCreate';

const DescriptionText: FC<IDescriptionTextPopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {descriptionText, descriptionStyles, descriptionFont} = props;

  return (
    <Typography
      style={[styles.descriptionText, descriptionStyles]}
      font={descriptionFont ? descriptionFont : 'Medium-Secondary-M'}>
      {descriptionText}
    </Typography>
  );
};

export default DescriptionText;

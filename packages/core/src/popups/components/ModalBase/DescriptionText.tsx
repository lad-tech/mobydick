import React, {FC} from 'react';

import {IDescriptionTextPopup} from '../PopupBase';
import useStyles from '../../../styles/theme/hooks/useStyles';
import {Typography} from '../../../typography';

import stylesCreate from './stylesCreate';

/**
 * @deprecated use TextContent.tsx
 */
const DescriptionText: FC<IDescriptionTextPopup> = props => {
  const {descriptionText, descriptionStyles, descriptionFont} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <Typography
      style={[styles.text, descriptionStyles]}
      font={descriptionFont ? descriptionFont : 'Regular-Tertiary-XS'}>
      {descriptionText}
    </Typography>
  );
};

export default DescriptionText;

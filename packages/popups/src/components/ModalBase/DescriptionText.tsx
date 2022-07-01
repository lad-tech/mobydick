import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Text} from '@npm/mobydick-core';

import stylesCreate from '../PopupBase/stylesCreate';
import {IDescriptionTextPopup} from '../PopupBase/types';

const DescriptionText: FC<IDescriptionTextPopup> = props => {
  const [styles] = useStyles(stylesCreate);
  const {descriptionText, descriptionStyles} = props;

  return (
    <Text style={[styles.descriptionText, descriptionStyles]}>
      {descriptionText}
    </Text>
  );
};

export default DescriptionText;

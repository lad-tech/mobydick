import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import stylesCreate from '@npm/mobydick-popups/src/components/PopupBase/stylesCreate';
import {Text} from '@npm/mobydick-core';
import {IDescriptionTextPopup} from '@npm/mobydick-popups/src/components/PopupBase/types';

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

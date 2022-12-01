import {View} from '@npm/mobydick-core';
import {Typography} from '@npm/mobydick-typography';
import React, {FC} from 'react';
import {useStyles} from '@npm/mobydick-styles';

import {IContentTextProps} from '../PopupBase';

import stylesCreate from './stylesCreate';

const TextContent: FC<IContentTextProps> = props => {
  const {
    title,
    titleStyles,
    titleFont,
    descriptionText,
    descriptionStyles,
    descriptionFont,
  } = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={styles.textContent}>
      {Boolean(title) && (
        <Typography
          style={[styles.title, titleStyles]}
          font={titleFont ? titleFont : 'SemiBold-Primary-L'}>
          {title}
        </Typography>
      )}
      {Boolean(descriptionText) && (
        <Typography
          style={[styles.description, descriptionStyles]}
          font={descriptionFont ? descriptionFont : 'Regular-Tertiary-XS'}>
          {descriptionText}
        </Typography>
      )}
    </View>
  );
};
export default TextContent;

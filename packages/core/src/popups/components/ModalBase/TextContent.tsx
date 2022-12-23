import React, {FC} from 'react';

import {ITextContentProps} from '../PopupBase';
import useStyles from '../../../styles/theme/hooks/useStyles';
import View from '../../../basic/components/View/View';
import {Typography} from '../../../typography/components/Typography/Typography';

import stylesCreate from './stylesCreate';

const TextContent: FC<ITextContentProps> = props => {
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

import {FC} from 'react';

import {ITextContentProps} from '../PopupBase';
import useStyles from '../../../styles/hooks/useStyles';
import View from '../../../basic/components/View/View';
import {TypographyLegacy} from '../../../typography/components/TypographyLegacy/TypographyLegacy';

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
        <TypographyLegacy
          style={[styles.title, titleStyles]}
          font={titleFont ? titleFont : 'SemiBold-Primary-L'}>
          {title}
        </TypographyLegacy>
      )}
      {Boolean(descriptionText) && (
        <TypographyLegacy
          style={[styles.description, descriptionStyles]}
          font={descriptionFont ? descriptionFont : 'Regular-Tertiary-XS'}>
          {descriptionText}
        </TypographyLegacy>
      )}
    </View>
  );
};
export default TextContent;

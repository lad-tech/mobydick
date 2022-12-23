import React, {FC} from 'react';

import {ModalBase} from '../ModalBase';
import {IContentProps} from '../../types';
import {IButtonTypes} from '../../../cta/components/Button/types';
import useTheme from '../../../styles/theme/hooks/useTheme';
import useStyles from '../../../styles/theme/hooks/useStyles';

import stylesCreate from './stylesCreate';

interface IProps {
  title: string;
  descriptionText: string;

  typeLeft?: IButtonTypes;
  textLeft?: string;

  onPressRight(): void;
  typeRight?: IButtonTypes;
  textRight?: string;
}

const ModalError: FC<IContentProps & IProps> = props => {
  const {
    title,
    descriptionText,
    typeLeft,
    textLeft,
    typeRight,
    textRight,
    onPressRight,
    onClose,
  } = props;
  const {colors} = useTheme();
  const [styles] = useStyles(stylesCreate);

  return (
    <ModalBase
      overlayStyle={styles.overlayStyle}
      containerStyle={styles.container}
      {...props}>
      <ModalBase.AlertContent
        name={'icon-warning'}
        color={colors.IconAttention}
        style={{backgroundColor: colors.BgError}}
      />

      <ModalBase.TextContent title={title} descriptionText={descriptionText} />
      <ModalBase.HorizontalButtonsView
        typeLeft={typeLeft || IButtonTypes.tertiary}
        textLeft={textLeft || 'Отмена'}
        onPressLeft={onClose}
        typeRight={typeRight || IButtonTypes.destructive}
        textRight={textRight || 'Удалить'}
        onPressRight={onPressRight}
      />
    </ModalBase>
  );
};

export default ModalError;

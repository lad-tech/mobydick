import {useTheme} from '@npm/mobydick-styles';
import React, {FC} from 'react';
import {IButtonTypes} from '@npm/mobydick-cta';

import {ModalBase} from '../ModalBase';
import {IContentProps, IHorizontalButtonsView} from '../../types';

interface IProps extends IHorizontalButtonsView {
  title?: string;
  descriptionText?: string | null;
}

const ModalErrorHorizontalButtons: FC<IContentProps & IProps> = props => {
  const {
    title,
    descriptionText,
    typeLeft,
    onPressLeft,
    textLeft,
    typeRight,
    textRight,
    onPressRight,
  } = props;
  const {colors} = useTheme();

  return (
    <ModalBase overlayStyle={{justifyContent: 'center'}} {...props}>
      <ModalBase.AlertContent
        name={'icon-warning'}
        color={colors.IconAttention}
        style={{backgroundColor: colors.BgError}}
      />
      {title && <ModalBase.Title title={title} />}
      {descriptionText && (
        <ModalBase.DescriptionText descriptionText={descriptionText} />
      )}
      <ModalBase.HorizontalButtonsView
        typeLeft={typeLeft || IButtonTypes.tertiary}
        textLeft={textLeft}
        onPressLeft={onPressLeft}
        typeRight={typeRight || IButtonTypes.destructive}
        textRight={textRight}
        onPressRight={onPressRight}
      />
    </ModalBase>
  );
};

export default ModalErrorHorizontalButtons;

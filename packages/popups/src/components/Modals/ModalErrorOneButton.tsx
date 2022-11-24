import {useTheme} from '@npm/mobydick-styles';
import React, {FC} from 'react';
import {IButtonTypes} from '@npm/mobydick-cta';

import {ModalBase} from '../ModalBase';
import {IContentProps} from '../../types';

interface IProps {
  title?: string;
  descriptionText?: string | null;
  buttonText?: string;
}

const ModalErrorOneButton: FC<IContentProps & IProps> = props => {
  const {onClose, title, descriptionText, buttonText} = props;
  const {colors} = useTheme();

  return (
    <ModalBase overlayStyle={{justifyContent: 'center'}} {...props}>
      {/*<ModalBase.CloseIcon onPress={onClose} />*/}

      <ModalBase.AlertContent
        name={'icon-warning'}
        color={colors.IconAttention}
        style={{backgroundColor: colors.BgError}}
      />
      {title && <ModalBase.Title title={title} />}
      {descriptionText && (
        <ModalBase.DescriptionText descriptionText={descriptionText} />
      )}
      <ModalBase.VerticalButtonsView>
        <ModalBase.VerticalButton
          type={IButtonTypes.tertiary}
          onPress={onClose}
          text={buttonText || 'Ok'}
        />
      </ModalBase.VerticalButtonsView>
    </ModalBase>
  );
};

export default ModalErrorOneButton;

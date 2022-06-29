import {select, text} from '@storybook/addon-knobs';
import {Button, ISize} from '@npm/mobydick-cta';
import React, {FC} from 'react';
import ModalBase from '@npm/mobydick-popups/src/components/ModalBase/ModalBase';
import {IPopup} from '@npm/mobydick-popups';

import ImageModal from './icons/svg/imageModal.svg';

const ExampleModal: FC<IPopup> = props => {
  const {onClose, id} = props;

  return (
    <ModalBase onClose={onClose} id={id}>
      <ModalBase.CloseIcon onPress={onClose} />
      <ImageModal style={{marginTop: 10}} />
      <ModalBase.Title title={text('title', 'Нет доступа к камере')} />
      <ModalBase.DescriptionText
        descriptionText={text(
          'Description text',
          'Разрешите доступ к камере в настройках, чтобы сканировать штрихкод или QR-код на картах',
        )}
      />
      <Button
        onPress={() => null}
        text={text('Text button', 'Разрешить доступ')}
        size={select('Size button', ISize, ISize.small)}
      />
    </ModalBase>
  );
};

export default ExampleModal;

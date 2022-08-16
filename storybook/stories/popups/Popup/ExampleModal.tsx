import {select, text} from '@storybook/addon-knobs';
import {Button, ISize} from '@npm/mobydick-cta';
import React, {FC} from 'react';
import {IContentProps, usePopups, ModalBase} from '@npm/mobydick-popups';
import {rem} from '@npm/mobydick-styles';

import ImageModal from './icons/svg/imageModal.svg';

const ExampleModal: FC<IContentProps> = props => {
  const popupContext = usePopups();
  const {onClose} = props;

  return (
    <ModalBase {...props}>
      <ModalBase.CloseIcon onPress={onClose} />
      <ImageModal style={{marginTop: rem(10)}} />
      <ModalBase.Title title={text('title', 'Нет доступа к камере')} />
      <ModalBase.DescriptionText
        descriptionText={text(
          'Description text',
          'Разрешите доступ к камере в настройках, чтобы сканировать штрихкод или QR-код на картах',
        )}
      />
      <Button
        onPress={() => popupContext.openPopup({Content: NestedExampleModal})}
        text={text('Text button', 'Разрешить доступ')}
        size={select('Size button', ISize, ISize.small)}
      />
    </ModalBase>
  );
};

const NestedExampleModal: FC<IContentProps> = props => {
  const popupContext = usePopups();
  const {onClose} = props;

  return (
    <ModalBase {...props}>
      <ModalBase.CloseIcon onPress={onClose} />
      <ModalBase.Title title={'Вложенная Модалка'} />
      <ModalBase.DescriptionText descriptionText={'Это просто пример'} />
      <Button
        onPress={() => popupContext.openPopup({Content: ExampleModal})}
        text={'Открыть ещё одну'}
        size={select('Size button', ISize, ISize.small)}
      />
    </ModalBase>
  );
};

export default ExampleModal;

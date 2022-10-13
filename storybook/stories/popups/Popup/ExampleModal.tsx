import {boolean, select, text} from '@storybook/addon-knobs';
import React, {FC} from 'react';
import {
  IAlertTypes,
  IContentProps,
  ModalBase,
  usePopups,
} from '@npm/mobydick-popups';
import {rem} from '@npm/mobydick-styles';
import {ITypes} from '@npm/mobydick-cta';

import selectFont from '../../../utils/selectFont';

import ImageModal from './icons/svg/imageModal.svg';

const ExampleModal: FC<IContentProps> = props => {
  const popupContext = usePopups();
  const {onClose} = props;
  const titleFont = select('Title font', selectFont, 'SemiBold-Primary-XL');
  const descriptionFont = select(
    'Description font',
    selectFont,
    'Regular-Secondary-M',
  );

  return (
    <ModalBase {...props}>
      <ModalBase.CloseIcon onPress={onClose} />
      {boolean('show alert', true) && (
        <ModalBase.AlertContent
          type={select('type alert', IAlertTypes, IAlertTypes.warning)}
        />
      )}
      {boolean('show image', false) && (
        <ImageModal style={{marginTop: rem(24)}} />
      )}
      {boolean('show title', true) && (
        <ModalBase.Title
          title={text('Title text ', 'Нет доступа к камере')}
          titleFont={titleFont}
        />
      )}
      {boolean('show description text', true) && (
        <ModalBase.DescriptionText
          descriptionText={text(
            'Description text',
            'Разрешите доступ к камере в настройках, чтобы сканировать штрихкод или QR-код на картах',
          )}
          descriptionFont={descriptionFont}
        />
      )}
      {boolean('show vertical button', false) && (
        <ModalBase.VerticalButtonsView
          onPressOne={() =>
            popupContext.openPopup({Content: NestedExampleModal})
          }
          typeOne={select('type one vertical button', ITypes, ITypes.primary)}
          textOne={text('text one vertical button', 'Разрешить доступ')}
          onPressTwo={() =>
            popupContext.openPopup({Content: NestedExampleModal})
          }
          typeTwo={select(
            'type two vertical button',
            ITypes,
            ITypes.destructive,
          )}
          textTwo={text('text two vertical button', 'Разрешить доступ')}
        />
      )}
      {boolean('show horizontal button', true) && (
        <ModalBase.HorizontalButtonsView
          typeRight={select('type right button', ITypes, ITypes.secondary)}
          textRight={text('text right button ', 'Добавить')}
          onPressRight={() =>
            popupContext.openPopup({Content: NestedExampleModal})
          }
          typeLeft={select('type left button', ITypes, ITypes.destructive)}
          textLeft={text('text left button ', 'Отмена')}
          onPressLeft={() =>
            popupContext.openPopup({Content: NestedExampleModal})
          }
        />
      )}
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
      <ModalBase.VerticalButtonsView
        onPressOne={() => popupContext.openPopup({Content: ExampleModal})}
        textOne={'Открыть ещё одну'}
        typeOne={select('type one vertical button', ITypes, ITypes.primary)}
      />
    </ModalBase>
  );
};

export default ExampleModal;

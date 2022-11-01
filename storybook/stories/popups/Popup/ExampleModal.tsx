import {boolean, select, text} from '@storybook/addon-knobs';
import React, {FC} from 'react';
import {IContentProps, ModalBase, usePopups} from '@npm/mobydick-popups';
import {rem, useTheme} from '@npm/mobydick-styles';
import {IButtonSize, IButtonTypes} from '@npm/mobydick-cta';

import selectFont from '../../../utils/selectFont';

import ImageModal from './icons/svg/imageModal.svg';

const ExampleModal: FC<IContentProps> = props => {
  const popupContext = usePopups();
  const {colors} = useTheme();
  const {onClose} = props;
  const titleFont = select('Title font', selectFont, 'SemiBold-Primary-XL');
  const descriptionFont = select(
    'Description font',
    selectFont,
    'Regular-Tertiary-XS',
  );

  return (
    <ModalBase {...props}>
      <ModalBase.CloseIcon onPress={onClose} />
      {boolean('show alert check', true) && <ModalBase.AlertContent />}
      {boolean('show alert warning', false) && (
        <ModalBase.AlertContent
          name={'icon-warning'}
          color={colors.IconAttention}
          style={{backgroundColor: colors.BgError}}
        />
      )}
      {boolean('show image', false) && (
        <ModalBase.ImageView image={<ImageModal />} />
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
        <ModalBase.VerticalButtonsView>
          <ModalBase.VerticalButton
            onPress={() =>
              popupContext.openPopup({Content: NestedExampleModal})
            }
            type={select(
              'type one vertical button',
              IButtonTypes,
              IButtonTypes.primary,
            )}
            text={text('text one vertical button', 'Разрешить доступ')}
            style={{marginBottom: rem(12)}}
          />
          <ModalBase.VerticalButton
            onPress={() =>
              popupContext.openPopup({Content: NestedExampleModal})
            }
            type={select(
              'type two vertical button',
              IButtonTypes,
              IButtonTypes.destructive,
            )}
            text={text('text two vertical button', 'Разрешить доступ')}
          />
        </ModalBase.VerticalButtonsView>
      )}
      {boolean('show horizontal button', true) && (
        <ModalBase.HorizontalButtonsView
          typeRight={select(
            'type right button',
            IButtonTypes,
            IButtonTypes.secondary,
          )}
          textRight={text('text right button ', 'Добавить')}
          onPressRight={() =>
            popupContext.openPopup({Content: NestedExampleModal})
          }
          typeLeft={select(
            'type left button',
            IButtonTypes,
            IButtonTypes.destructive,
          )}
          textLeft={text('text left button ', 'Отмена')}
          onPressLeft={() =>
            popupContext.openPopup({Content: NestedExampleModal})
          }
        />
      )}
      {boolean('show one button', false) && (
        <ModalBase.VerticalButton
          onPress={() => popupContext.openPopup({Content: NestedExampleModal})}
          type={select('type one button', IButtonTypes, IButtonTypes.primary)}
          text={text('text one button', 'Разрешить доступ')}
          size={select('size one button', IButtonSize, IButtonSize.fixed)}
          style={{marginBottom: rem(12)}}
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
      <ModalBase.VerticalButton
        onPress={() => popupContext.openPopup({Content: ExampleModal})}
        text={'Открыть ещё одну'}
      />
    </ModalBase>
  );
};

export default ExampleModal;

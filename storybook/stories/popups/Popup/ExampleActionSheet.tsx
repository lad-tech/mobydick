import {ActionSheetBase, IContentProps} from '@npm/mobydick-popups';
import React, {FC, useState} from 'react';
import {rem, SimpleIcon, SimpleIconName, useTheme} from '@npm/mobydick-styles';
import {select} from '@storybook/addon-knobs';

enum IViewActionSheet {
  defaultActions = 'defaultActions',
  withIconActions = 'withIconActions',
  optionsActions = 'optionsActions',
  selectActions = 'selectActions',
  deleteConfiguration = 'deleteConfiguration',
}

const cancelText = 'Отменить';
const deleteText = 'Удалить';
const textFontAccentM = 'Regular-Accent-M';
const textFontAccentL = 'Regular-Accent-L';
const textFontErrorL = 'Regular-Error-L';

const leftIconAccent = (name: SimpleIconName) => {
  const {colors} = useTheme();
  return <SimpleIcon name={name} size={rem(28)} color={colors.TextAccent} />;
};
const ExampleActionSheet: FC<IContentProps> = props => {
  const {onClose} = props;
  const {colors} = useTheme();
  const [selected, setSelected] = useState<string[]>([]);

  const check = (title: string) => {
    if (selected.find(item => item === title)) {
      return setSelected(selected.filter(el => el !== title));
    }
    return setSelected([...selected, title]);
  };

  switch (
    select(
      'View action sheets',
      IViewActionSheet,
      IViewActionSheet.defaultActions,
    )
  ) {
    case IViewActionSheet.withIconActions:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.FirstItem
            title={'Редактировать плейлист'}
            textFont={textFontAccentM}
            leftIcon={leftIconAccent('icon-edit')}
          />
          <ActionSheetBase.InnerItem
            title={'Слушать далее'}
            textFont={textFontAccentM}
            leftIcon={leftIconAccent('icon-arrow-right')}
          />
          <ActionSheetBase.InnerItem
            title={'Поделиться'}
            textFont={textFontAccentM}
            leftIcon={leftIconAccent('icon-account')}
          />
          <ActionSheetBase.InnerItem
            title={'Скопировать ссылку'}
            textFont={textFontAccentM}
            leftIcon={leftIconAccent('icon-copy')}
          />
          <ActionSheetBase.LastItem
            title={'Удалить плейлист'}
            onPress={onClose}
            leftIcon={
              <SimpleIcon
                name={'icon-cancel'}
                size={rem(28)}
                color={colors.TextError}
              />
            }
            textFont={'Regular-Error-M'}
          />
          <ActionSheetBase.CancelItem
            title={cancelText}
            textFont={textFontAccentL}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
    case IViewActionSheet.optionsActions:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.FirstItem
            title={'Качество'}
            subTitle={'Авто'}
            leftIcon={leftIconAccent('icon-grid')}
          />
          <ActionSheetBase.InnerItem
            title={'Субтитры'}
            subTitle={'Отсутствуют'}
            disabled={true}
            leftIcon={
              <SimpleIcon
                name={'icon-attachment'}
                size={rem(28)}
                color={colors.IconMuted}
              />
            }
          />

          <ActionSheetBase.LastItem
            title={'Скорость воспроизведения'}
            subTitle={'Обычная'}
            leftIcon={leftIconAccent('icon-edit')}
          />
          <ActionSheetBase.CancelItem
            title={cancelText}
            textFont={textFontAccentL}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
    case IViewActionSheet.selectActions:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.FirstItem
            title={'Лучшие друзья'}
            onPress={() => {
              check('Лучшие друзья');
            }}
            selected={selected}
          />
          <ActionSheetBase.InnerItem
            title={'Родственники'}
            onPress={() => {
              check('Родственники');
            }}
            selected={selected}
          />
          <ActionSheetBase.InnerItem
            title={'Коллеги'}
            onPress={() => {
              check('Коллеги');
            }}
            selected={selected}
          />
          <ActionSheetBase.InnerItem
            title={'Друзья по школе'}
            onPress={() => {
              check('Друзья по школе');
            }}
            selected={selected}
          />
          <ActionSheetBase.LastItem
            title={'Друзья по вузу'}
            onPress={() => {
              check('Друзья по вузу');
            }}
            selected={selected}
          />
          <ActionSheetBase.CancelItem
            title={cancelText}
            textFont={textFontAccentL}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
    case IViewActionSheet.deleteConfiguration:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.FirstItem
            label={
              'Вы действительно хотите удалить это видео\n из Ваших видео?'
            }
          />
          <ActionSheetBase.LastItem
            title={deleteText}
            onPress={onClose}
            textFont={textFontErrorL}
          />
          <ActionSheetBase.CancelItem title={cancelText} onPress={onClose} />
        </ActionSheetBase>
      );
    case IViewActionSheet.defaultActions:
    default:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.FirstItem title={'Редактировать'} />
          <ActionSheetBase.InnerItem title={'Добавить в избранное'} />
          <ActionSheetBase.InnerItem title={'Поделиться'} />
          <ActionSheetBase.InnerItem title={'Сообщить о проблеме'} />
          <ActionSheetBase.LastItem
            title={deleteText}
            textFont={textFontErrorL}
            onPress={onClose}
          />
          <ActionSheetBase.CancelItem title={cancelText} onPress={onClose} />
        </ActionSheetBase>
      );
  }
};

export default ExampleActionSheet;

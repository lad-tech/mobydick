import {ActionSheetBase, IContentProps, IItemType} from '@npm/mobydick-popups';
import React, {FC, useState} from 'react';
import {SimpleIcon, SimpleIconName} from '@npm/mobydick-styles';
import {select} from '@storybook/addon-knobs';

enum IViewActionSheet {
  defaultActions = 'defaultActions',
  withIconActions = 'withIconActions',
  optionsActions = 'optionsActions',
  selectRadioActions = 'selectRadioActions',
  selectCheckboxActions = 'selectCheckboxActions',
  deleteConfiguration = 'deleteConfiguration',
}

const resetText = 'Сбросить';
const cancelText = 'Отменить';
const settingsText = 'Настройка';
const applyText = 'Применить';
const textFontAccentM = 'Medium-Accent-M';
const textFontErrorL = 'Regular-Error-L';

const leftIconAccent = (name: SimpleIconName) => {
  return <SimpleIcon name={name} />;
};
const ExampleActionSheet: FC<IContentProps> = props => {
  const {onClose} = props;
  const [radio, setRadio] = useState<string>('');
  const [checkboxList, setCheckboxList] = useState<string[]>([]);

  const onPressCheckbox = (title: string) => {
    if (checkboxList.find(item => item === title)) {
      return setCheckboxList(checkboxList.filter(el => el !== title));
    }
    return setCheckboxList([...checkboxList, title]);
  };

  const onPressRadio = (title: string) => {
    if (radio === title) {
      return setRadio('');
    }
    return setRadio(title);
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
          <ActionSheetBase.Item
            itemType={IItemType.firstItem}
            title={settingsText}
            leftIcon={leftIconAccent('icon-settings')}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={settingsText}
            leftIcon={leftIconAccent('icon-settings')}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={settingsText}
            leftIcon={leftIconAccent('icon-settings')}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={settingsText}
            leftIcon={leftIconAccent('icon-settings')}
          />
          <ActionSheetBase.Item
            itemType={IItemType.lastItem}
            title={settingsText}
            onPress={onClose}
            leftIcon={leftIconAccent('icon-settings')}
          />
          <ActionSheetBase.Item
            itemType={IItemType.cancelItem}
            textFont={textFontAccentM}
            title={resetText}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
    case IViewActionSheet.optionsActions:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.Item
            itemType={IItemType.firstItem}
            title={'Выгрузить файл'}
          />
          <ActionSheetBase.Item
            itemType={IItemType.lastItem}
            title={'Отправить HR'}
          />
          <ActionSheetBase.Item
            itemType={IItemType.cancelItem}
            title={cancelText}
            textFont={textFontAccentM}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
    case IViewActionSheet.selectRadioActions:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.Item
            itemType={IItemType.firstItem}
            title={'Отказано'}
            onPress={() => {
              onPressRadio('Отказано');
            }}
            radio={radio}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={'Согласование'}
            onPress={() => {
              onPressRadio('Согласование');
            }}
            radio={radio}
          />
          <ActionSheetBase.Item
            itemType={IItemType.lastItem}
            title={'Согласован'}
            onPress={() => {
              onPressRadio('Согласован');
            }}
            radio={radio}
          />
          <ActionSheetBase.Item
            itemType={IItemType.cancelItem}
            textFont={textFontAccentM}
            title={applyText}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
    case IViewActionSheet.selectCheckboxActions:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.Item
            itemType={IItemType.firstItem}
            title={'Отказано'}
            onPress={() => {
              onPressCheckbox('Отказано');
            }}
            checkboxList={checkboxList}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={'Согласование'}
            onPress={() => {
              onPressCheckbox('Согласование');
            }}
            checkboxList={checkboxList}
          />
          <ActionSheetBase.Item
            itemType={IItemType.lastItem}
            title={'Согласован'}
            onPress={() => {
              onPressCheckbox('Согласован');
            }}
            checkboxList={checkboxList}
          />
          <ActionSheetBase.Item
            itemType={IItemType.cancelItem}
            textFont={textFontAccentM}
            title={applyText}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
    case IViewActionSheet.deleteConfiguration:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.Item
            itemType={IItemType.singleItem}
            title={'Завершить консультацию'}
            onPress={onClose}
            textFont={textFontErrorL}
          />
          <ActionSheetBase.Item
            itemType={IItemType.cancelItem}
            textFont={textFontAccentM}
            title={cancelText}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
    case IViewActionSheet.defaultActions:
    default:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.Item
            itemType={IItemType.firstItem}
            title={settingsText}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={settingsText}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={settingsText}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={settingsText}
          />
          <ActionSheetBase.Item
            itemType={IItemType.lastItem}
            title={settingsText}
            onPress={onClose}
          />
          <ActionSheetBase.Item
            itemType={IItemType.cancelItem}
            textFont={textFontAccentM}
            title={'Назад'}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
  }
};

export default ExampleActionSheet;

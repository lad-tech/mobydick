import React, {FC, useCallback, useState} from 'react';

import {
  ActionSheetBase,
  IContentProps,
  IItemType,
  SimpleIcon,
  SimpleIconName,
} from '@lad-tech/mobydick-core';

export enum IViewActionSheet {
  defaultActions = 'defaultActions',
  optionsActions = 'optionsActions',
  selectRadioActions = 'selectRadioActions',
  selectCheckboxActions = 'selectCheckboxActions',
  deleteConfiguration = 'deleteConfiguration',
}

const resetText = 'Сбросить';
const cancelText = 'Отменить';
const settingsText = 'Настройка';
const applyText = 'Применить';
const deniedText = 'Отказано';
const coordinationText = 'Согласование';
const agreedText = 'Согласован';
const textFontErrorL = 'Regular-Error-L';

const leftIconAccent = (name: SimpleIconName) => {
  return <SimpleIcon name={name} />;
};

export interface IStoryProps {
  leftIconName: SimpleIconName;
  isShowLeftIcon: boolean;
  disabled: boolean;
  viewActionSheets: IViewActionSheet;
}
const ExampleActionSheet: FC<IContentProps & IStoryProps> = props => {
  const {onClose, viewActionSheets, isShowLeftIcon, disabled, leftIconName} =
    props;
  const [radio, setRadio] = useState<string>('');
  const [checkboxList, setCheckboxList] = useState<string[]>([]);
  const leftIcon = isShowLeftIcon ? leftIconAccent(leftIconName) : undefined;

  const onPressCheckbox = (title: string) => {
    if (checkboxList.find(item => item === title)) {
      return setCheckboxList(checkboxList.filter(el => el !== title));
    }
    return setCheckboxList([...checkboxList, title]);
  };

  const onPressRadio = useCallback(
    (title: string) => {
      if (radio === title) {
        return setRadio('');
      }
      return setRadio(title);
    },
    [radio],
  );

  const onPressFirstItem = useCallback(() => {
    onPressRadio(deniedText);
  }, [onPressRadio]);

  const onPressInnerItem = useCallback(() => {
    onPressRadio(coordinationText);
  }, [onPressRadio]);

  const onPressLastItem = useCallback(() => {
    onPressRadio(agreedText);
  }, [onPressRadio]);

  const onPressFirstItemCheckbox = useCallback(() => {
    onPressCheckbox(deniedText);
  }, [onPressCheckbox]);

  const onPressInnerItemCheckbox = useCallback(() => {
    onPressCheckbox(coordinationText);
  }, [onPressCheckbox]);

  const onPressLastItemCheckbox = useCallback(() => {
    onPressCheckbox(agreedText);
  }, [onPressCheckbox]);

  switch (viewActionSheets) {
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
            disabled={disabled}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
    case IViewActionSheet.selectRadioActions:
      return (
        <ActionSheetBase {...props}>
          <ActionSheetBase.Item
            itemType={IItemType.firstItem}
            title={deniedText}
            onPress={onPressFirstItem}
            radio={radio}
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={coordinationText}
            onPress={onPressInnerItem}
            radio={radio}
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.lastItem}
            title={agreedText}
            onPress={onPressLastItem}
            radio={radio}
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.cancelItem}
            disabled={disabled}
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
            title={deniedText}
            onPress={onPressFirstItemCheckbox}
            checkboxList={checkboxList}
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={coordinationText}
            onPress={onPressInnerItemCheckbox}
            checkboxList={checkboxList}
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.lastItem}
            title={agreedText}
            onPress={onPressLastItemCheckbox}
            checkboxList={checkboxList}
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.cancelItem}
            disabled={disabled}
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
            title={cancelText}
            disabled={disabled}
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
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={settingsText}
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={settingsText}
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.innerItem}
            title={settingsText}
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.lastItem}
            title={settingsText}
            onPress={onClose}
            leftIcon={leftIcon}
          />
          <ActionSheetBase.Item
            itemType={IItemType.cancelItem}
            title={resetText}
            disabled={disabled}
            onPress={onClose}
          />
        </ActionSheetBase>
      );
  }
};

export default ExampleActionSheet;

import React, {useState} from 'react';
import {DropDown} from '@npm/mobydick-inputs';
import {array, number, select, text} from '@storybook/addon-knobs';
import {
  defaultTextLightColor,
  iconNames,
  ITextColors,
  SimpleIcon,
  SimpleIconName,
} from '@npm/mobydick-styles';
import {
  TEXT,
  TFontColor,
  TFontSize,
  TFontWeight,
} from '@npm/mobydick-typography';
const textColorKeys = Object.keys(
  defaultTextLightColor,
) as (keyof ITextColors)[];
const fontColors = textColorKeys.map(item => item.slice(TEXT.length));

const ExampleArrayOfStrings = () => {
  const [selected, setSelected] = useState<string>();

  return (
    <DropDown
      selectedItem={selected}
      placeholder={text('Placeholder', 'Выберите язык')}
      label={text('title', 'Язык')}
      list={array('list', [
        'Русский',

        'English',

        'Deutsch',

        'Japanese',

        'Bulgarian',
      ])}
      onPress={setSelected}
      rightIcon={
        <SimpleIcon
          name={
            select('icon name', iconNames, 'icon-arrow-down') as SimpleIconName
          }
        />
      }
      addButtonStyle={{
        height: number('Высота кнопки', 40),
        width: number('Ширина кнопки', 300),
      }}
      addFlatListItemStyle={{
        height: number('Высота элемента списка', 32),
      }}
      addFlatListStyle={{width: number('Ширина списка', 300)}}
      addButtonTextFont={`${
        select(
          'Начертание текста кнопки',
          TFontWeight,
          TFontWeight.Regular,
        ) as TFontWeight
      }-${select(
        'Цвет текста кнопки',
        fontColors as TFontColor[],
        'Muted',
      )}-${select('Размер текста кнопки', TFontSize, TFontSize.M)}`}
      addLabelFont={`${
        select(
          'Начертание текста заголовка',
          TFontWeight,
          TFontWeight.Medium,
        ) as TFontWeight
      }-${select(
        'Цвет текста заголовка',
        fontColors as TFontColor[],
        'Tertiary',
      )}-${select('Размер текста заголовка', TFontSize, TFontSize.XS)}`}
      addFlatListTextFont={`${
        select(
          'Начертание текста элементов списка',
          TFontWeight,
          TFontWeight.Regular,
        ) as TFontWeight
      }-${select(
        'Цвет текста элементов списка',
        fontColors as TFontColor[],
        'Secondary',
      )}-${select('Размер текста элементов списка', TFontSize, TFontSize.M)}`}
      addButtonTextFontChosen={`${
        select(
          'Начертание текста кнопки при выбранном элементе',
          TFontWeight,
          TFontWeight.Medium,
        ) as TFontWeight
      }-${select(
        'Цвет текста кнопки при выбранном элементе',
        fontColors as TFontColor[],
        'Primary',
      )}-${select(
        'Размер текста кнопки при выбранном элементе',
        TFontSize,
        TFontSize.M,
      )}`}
      addFlatListTextFontPressed={`${
        select(
          'Начертание текста выбранного элемента в списке',
          TFontWeight,
          TFontWeight.Medium,
        ) as TFontWeight
      }-${select(
        'Цвет текста выбранного элемента в списке',
        fontColors as TFontColor[],
        'Primary',
      )}-${select(
        'Размер текста выбранного элемента в списке',
        TFontSize,
        TFontSize.M,
      )}`}
    />
  );
};

export default ExampleArrayOfStrings;

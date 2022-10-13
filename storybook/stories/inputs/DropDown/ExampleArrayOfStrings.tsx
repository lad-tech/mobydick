import React, {useState} from 'react';
import {DropDown, IInputsTypes} from '@npm/mobydick-inputs';
import {array, boolean, number, select, text} from '@storybook/addon-knobs';
import {
  defaultTextLightColor,
  iconNames,
  ITextColors,
  rem,
  SimpleIcon,
  SimpleIconName,
  useTheme,
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
  const {colors} = useTheme();

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
      disabled={boolean('disabled', false)}
      type={select('type', IInputsTypes, IInputsTypes.default)}
      subtitle={text('subtitle', '')}
      subtitleIcon={
        select(
          'subtitleIcon name',
          iconNames,
          'icon-arrow-down',
        ) as SimpleIconName
      }
      rightIcon={
        <SimpleIcon
          name={
            select('icon name', iconNames, 'icon-arrow-down') as SimpleIconName
          }
          color={colors.IconMuted}
        />
      }
      buttonStyle={{
        height: number('Высота кнопки', rem(40)),
        width: number('Ширина кнопки', rem(300)),
      }}
      flatListStyle={{width: number('Ширина списка', rem(300))}}
      buttonTextFont={`${
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
      labelFont={`${
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
      flatListTextFont={`${
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
      buttonTextFontChosen={`${
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
      flatListTextFontPressed={`${
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

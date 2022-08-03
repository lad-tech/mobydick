import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import {DropDown} from '@npm/mobydick-inputs';
import {array, number, select, text} from '@storybook/addon-knobs';
import {PopupsProvider} from '@npm/mobydick-popups';
import {ScrollView, View} from '@npm/mobydick-core';
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
import {Dimensions} from 'react-native';

import CenterView from '../../CenterView';
const {height} = Dimensions.get('window');
const textColorKeys = Object.keys(
  defaultTextLightColor,
) as (keyof ITextColors)[];
const fontColors = textColorKeys.map(item => item.slice(TEXT.length));

const Example = () => {
  const [selected, setSelected] = useState('');

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

        'Bolgarian',
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
// тут лютые отступы и ScrollView, чтобы потестить DropDown в боевых условиях <3
storiesOf('Design System/Inputs/DropDown', module)
  .addDecorator(getStory => (
    <PopupsProvider>
      <CenterView>
        <ScrollView>
          <View style={{height: height * 2}}>
            <View style={{marginTop: height / 1.3}}>{getStory()}</View>
          </View>
        </ScrollView>
      </CenterView>
    </PopupsProvider>
  ))
  .add('basic', () => <Example />);

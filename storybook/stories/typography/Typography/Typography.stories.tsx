import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {select, text} from '@storybook/addon-knobs';

import CenterView from '../../CenterView';

import {
  TEXT,
  TFontColor,
  TFontSize,
  TFontWeight,
  Typography,
  defaultTextLightColor,
  ITextColors,
} from '@npm/mobydick-core';

const textColorKeys = Object.keys(
  defaultTextLightColor,
) as (keyof ITextColors)[];

const fontColors = textColorKeys.map(item => item.slice(TEXT.length));

storiesOf('Design System/Typography/Typography', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <Typography
      font={`${
        select('Начертание', TFontWeight, TFontWeight.Regular) as TFontWeight
      }-${select('Цвет', fontColors as TFontColor[], 'Primary')}-${select(
        'Размер',
        TFontSize,
        TFontSize.H1,
      )}`}>
      {text('Введите что-нибудь', 'Ваш текст')}
    </Typography>
  ));

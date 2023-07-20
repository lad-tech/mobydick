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
} from '@lad-tech/mobydick-core';

const textColorKeys = Object.keys(
  defaultTextLightColor,
) as (keyof ITextColors)[];

const fontColors = textColorKeys.map(item => item.slice(TEXT.length));

export default {
  title: 'Design System/Typography/Typography',
  decorators: [getStory => <CenterView>{getStory()}</CenterView>],
};

export const Basic = () => (
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
);

Basic.story = {
  name: 'basic',
};

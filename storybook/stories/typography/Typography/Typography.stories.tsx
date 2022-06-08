import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {select, text} from '@storybook/addon-knobs';
import {
  TFontColor,
  TFontSize,
  TFontWeight,
  Typography,
} from '@npm/mobydick-typography';
import {fontColors} from '@npm/mobydick-typography/src/components/Typography';

import CenterView from '../../CenterView';

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

import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {InputField, ITypes} from '@npm/mobydick-inputs';
import {boolean, select, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {
  iconNames,
  rem,
  Show,
  SimpleIcon,
  SimpleIconName,
} from '@npm/mobydick-styles';

import CenterView from '../../CenterView';

storiesOf('Design System/Inputs/InputField', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <InputField
      type={select('type', ITypes, ITypes.default)}
      title={text('title', 'Название поля')}
      placeholder={text('Placeholder', 'Введите что-нибудь')}
      subtitle={text('subtitle', 'Подпись')}
      rightIcon={
        <SimpleIcon name={select('right Icon', iconNames, 'icon-show')} />
      }
      disabled={boolean('disabled', false)}
      onChangeText={action('onChangeText')}
      textInputContainerStyle={{width: rem(250)}}
    />
  ))
  .add('with subtitleIcon', () => (
    <InputField
      type={select('type', ITypes, ITypes.default)}
      title={text('title', 'Название поля')}
      placeholder={text('Placeholder', 'Введите что-нибудь')}
      subtitle={text('subtitle', 'Подпись')}
      subtitleIcon={
        select(
          'subtitleIcon name',
          iconNames,
          'icon-arrow-down',
        ) as SimpleIconName
      }
      rightIcon={
        <Show
          onPress={action('onPressRightIcon')}
          width={rem(24)}
          height={rem(24)}
        />
      }
      disabled={boolean('disabled', false)}
      onChangeText={action('onChangeText')}
      textInputContainerStyle={{width: rem(250)}}
    />
  ));

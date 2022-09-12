import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {InputField, ITypes} from '@npm/mobydick-inputs';
import {boolean, select, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {rem, Show} from '@npm/mobydick-styles';

import CenterView from '../../CenterView';

storiesOf('Design System/Inputs/InputField', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <InputField
      placeholder={text('Placeholder', 'Введите что-нибудь')}
      title={text('title', 'Название поля')}
      subtitle={text('subtitle', 'Подпись')}
      rightIcon={
        <Show
          onPress={action('onPressRightIcon')}
          width={rem(24)}
          height={rem(24)}
        />
      }
      disabled={boolean('disabled', false)}
      type={select('type', ITypes, ITypes.default)}
      onChangeText={action('onChangeText')}
    />
  ));

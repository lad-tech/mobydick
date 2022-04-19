import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {InputField, ITypes} from '@mobydick/inputs';
import {boolean, select, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Show} from '@mobydick/styles';

import CenterView from '../../CenterView';

storiesOf('Design System/Inputs/InputField', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <InputField
      placeholder={text('Placeholder', 'Введите что-нибудь')}
      title={text('title', 'Название поля')}
      subtitle={text('subtitle', 'Подпись')}
      rightIcon={<Show onPress={action('onPressRightIcon')} />}
      disabled={boolean('disabled', false)}
      type={select('type', ITypes, ITypes.default)}
      onChangeText={action('onChangeText')}
    />
  ));

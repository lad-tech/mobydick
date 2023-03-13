import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import CenterView from '../../CenterView';

import ButtonWithDelay from './ButtonWithDelay';
import ExampleButton from './ExampleButton';

import {IButtonSize, IButtonTypes} from '@npm/mobydick-core';

storiesOf('Design System/CTA/Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic button', () => <ExampleButton />)
  .add('button with delay and hitSlop', () => (
    <ButtonWithDelay
      text={text('text', 'text')}
      onPress={action('onPress')}
      type={select('type', IButtonTypes, IButtonTypes.primary)}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      size={select('size', IButtonSize, IButtonSize.small)}
    />
  ));

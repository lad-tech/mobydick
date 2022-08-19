import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {ISize, ITypes} from '@npm/mobydick-cta';

import CenterView from '../../CenterView';

import ButtonWithDelay from './ButtonWithDelay';
import ExampleButton from './ExampleButton';

storiesOf('Design System/CTA/Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <ExampleButton />)
  .add('button with delay', () => (
    <ButtonWithDelay
      text={text('text', 'text big text')}
      onPress={action('onPress')}
      type={select('type', ITypes, ITypes.primary)}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      size={select('size', ISize, ISize.small)}
    />
  ));

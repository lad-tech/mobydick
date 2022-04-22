import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {Button, ISize, ITypes} from '@mobydick/cta';

import CenterView from '../../CenterView';

storiesOf('Design System/CTA/Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <Button
      text={text('text', 'text')}
      onPress={action('onPress')}
      type={select('type', ITypes, ITypes.primary)}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      size={select('size', ISize, ISize.fixed)}
    />
  ));

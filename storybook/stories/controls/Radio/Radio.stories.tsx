import {storiesOf} from '@storybook/react-native';
import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import {Radio} from '@npm/mobydick-controls';
import {action} from '@storybook/addon-actions';

import CenterView from '../../CenterView';

storiesOf('Design System/Controls/Radio', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <Radio
      text={text('text', 'Option 1')}
      selected={boolean('selected', false)}
      disabled={boolean('disabled', false)}
      onSelect={action('clicked radio')}
    />
  ));

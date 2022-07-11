import {storiesOf} from '@storybook/react-native';
import {boolean, text} from '@storybook/addon-knobs';
import React from 'react';
import {Radio} from '@npm/mobydick-controls';
import {action} from '@storybook/addon-actions';
import {Typography} from '@npm/mobydick-typography';

import CenterView from '../../CenterView';

storiesOf('Design System/Controls/Radio', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <Radio
      value={'Pepe'}
      selected={boolean('selected', false)}
      disabled={boolean('disabled', false)}
      onPress={action('clicked radio')}>
      <Typography font={'Regular-Primary-M'}>
        {text('Text', 'Option1')}
      </Typography>
    </Radio>
  ));

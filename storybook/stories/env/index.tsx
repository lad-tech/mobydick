import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {BIBA} from '@env';

import CenterView from '../CenterView';

import {Typography} from '@npm/mobydick-core';

storiesOf('ENV', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <Typography>{JSON.stringify(BIBA)}</Typography>);

import {storiesOf} from '@storybook/react-native';
import React from 'react';

import envJson from '../../../env.json';
import CenterView from '../CenterView';

import {Typography} from '@lad-tech/mobydick-core';

storiesOf('ENV', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <Typography>{JSON.stringify(envJson)}</Typography>);

import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Typography, View} from '@npm/mobydick-core';

import CenterView from '../CenterView';
storiesOf('Check', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('CHECK', () => (
    <View>
      <Typography>{'ПРОВЕРКА'}</Typography>
      <Typography>
        {'CI_DEFAULT_BRANCH ' + process.env.CI_DEFAULT_BRANCH}
      </Typography>
      <Typography>
        {'CI_COMMIT_BRANCH ' + process.env.CI_COMMIT_BRANCH}
      </Typography>
      <Typography>{'process.env ' + JSON.stringify(process.env)}</Typography>
    </View>
  ));

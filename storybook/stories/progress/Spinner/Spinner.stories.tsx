import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Spinner} from '@npm/mobydick-progress';
import {number} from '@storybook/addon-knobs';

import CenterView from '../../CenterView';

storiesOf('Design System/Progress/Spinner', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <Spinner speed={number('speed', 2500)} />);

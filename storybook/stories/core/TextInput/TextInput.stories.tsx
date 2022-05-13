import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {TextInput} from '@npm/mobydick-core';

import CenterView from '../../CenterView';

storiesOf('Design System/core/TextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <TextInput placeholder={'Введите что-то'} />);

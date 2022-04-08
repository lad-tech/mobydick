import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {InputField} from '@mobydick/inputs';
import {text} from '@storybook/addon-knobs';

import CenterView from '../../CenterView';

storiesOf('Design System/Inputs/InputField', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <InputField placeholder={text('Placeholder', 'Введите что-нибудь')} />
  ));

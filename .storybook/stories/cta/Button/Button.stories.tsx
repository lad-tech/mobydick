import React from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import CenterView from '../../CenterView';

import ButtonWithDelay from './ButtonWithDelay';
import ExampleButton from './ExampleButton';

import {IButtonSize, IButtonTypes} from '@lad-tech/mobydick-core';

export default {
  title: 'Design System/CTA/Button',
  decorators: [getStory => <CenterView>{getStory()}</CenterView>],
};

export const BasicButton = () => <ExampleButton />;

BasicButton.story = {
  name: 'basic button',
};

export const ButtonWithDelayAndHitSlop = () => (
  <ButtonWithDelay
    text={text('text', 'text')}
    onPress={action('onPress')}
    type={select('type', IButtonTypes, IButtonTypes.primary)}
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    size={select('size', IButtonSize, IButtonSize.small)}
  />
);

ButtonWithDelayAndHitSlop.story = {
  name: 'button with delay and hitSlop',
};

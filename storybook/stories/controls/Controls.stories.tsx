import {storiesOf} from '@storybook/react-native';
import React from 'react';

import CenterView from '../CenterView';

import CheckboxListExample from './ControlsLists/CheckboxListExample';
import RadioListExample from './ControlsLists/RadioListExample';
import CheckboxExample from './CheckBox/CheckboxExample';
import RadioExample from './Radio/RadioExample';
import ToggleExample from './Toggle/ToggleExample';

storiesOf('Design System/Controls/ControlsList.tsx', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Checkbox', () => <CheckboxExample />)
  .add('Radio', () => <RadioExample />)
  .add('Toggle', () => <ToggleExample />)
  .add('Checkbox list', () => <CheckboxListExample />)
  .add('Radio list', () => <RadioListExample />);

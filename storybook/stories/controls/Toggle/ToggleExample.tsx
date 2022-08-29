import React from 'react';
import {Toggle} from '@npm/mobydick-controls';
import {boolean} from '@storybook/addon-knobs';

const ToggleExample = () => {
  return (
    <Toggle
      active={boolean('active', false)}
      disabled={boolean('disabled', false)}
    />
  );
};

export default ToggleExample;

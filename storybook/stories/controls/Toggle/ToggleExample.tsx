import React, {useState} from 'react';
import {Toggle} from '@npm/mobydick-controls';
import {boolean} from '@storybook/addon-knobs';

const ToggleExample = () => {
  const [isActive, setActive] = useState(false);

  return (
    <Toggle
      onPress={() => setActive(!isActive)}
      active={isActive}
      disabled={boolean('disabled', false)}
    />
  );
};

export default ToggleExample;

import React, {useState} from 'react';
import {boolean} from '@storybook/addon-knobs';

import {Toggle} from '@npm/mobydick-core';

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

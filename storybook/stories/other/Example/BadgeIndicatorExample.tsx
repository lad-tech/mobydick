import React from 'react';
import {number, select} from '@storybook/addon-knobs';

import {
  Button,
  IButtonTypes,
  IIndicatorTypes,
  BadgeIndicator,
  View,
} from '@lad-tech/mobydick-core';

const BadgeIndicatorExample = () => {
  return (
    <View>
      <BadgeIndicator
        type={select('type ', IIndicatorTypes, IIndicatorTypes.primary)}
        style={{
          top: number('top ', 0),
          right: number('right ', 0),
        }}
      />
      <Button text={'Кнопка'} type={IButtonTypes.secondary} />
    </View>
  );
};
export default BadgeIndicatorExample;

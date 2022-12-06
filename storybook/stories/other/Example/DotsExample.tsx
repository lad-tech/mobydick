import {Dots} from '@npm/mobydick-other';
import React from 'react';
import {number} from '@storybook/addon-knobs';
import {View} from '@npm/mobydick-core';

const DotsExample = () => {
  const length = number('number length', 10);
  const activeDot = number('number activeDot', 5);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <Dots length={length} activeDot={activeDot} />
    </View>
  );
};

export default DotsExample;

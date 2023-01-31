import React, {useState} from 'react';
import {number} from '@storybook/addon-knobs';

import {Button, Dots, rem, View} from '@npm/mobydick-core';

const DotsExample = () => {
  const length = number('number length', 10);

  const [activeDot, setActiveDot] = useState(0);
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: rem(20),
        }}>
        <Button
          text={'Prev'}
          onPress={() => {
            if (activeDot !== 0) {
              setActiveDot(activeDot - 1);
            }
          }}
        />
        <Dots length={length} activeDot={activeDot} />
        <Button
          text={'Next'}
          onPress={() => {
            if (activeDot !== length - 1) {
              setActiveDot(activeDot + 1);
            }
          }}
        />
      </View>
    </View>
  );
};

export default DotsExample;

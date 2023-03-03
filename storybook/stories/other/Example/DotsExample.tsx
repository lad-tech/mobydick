import React, {useCallback, useState} from 'react';
import {number} from '@storybook/addon-knobs';

import {Button, Dots, rem, View} from '@npm/mobydick-core';

const DotsExample = () => {
  const length = number('number length', 10);
  const [activeDot, setActiveDot] = useState(0);

  const onPressPrev = useCallback(() => {
    if (activeDot !== 0) {
      setActiveDot(activeDot - 1);
    }
  }, [activeDot]);
  const onPressNext = useCallback(() => {
    if (activeDot !== length - 1) {
      setActiveDot(activeDot + 1);
    }
  }, [activeDot, length]);

  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: rem(20),
        }}>
        <Button text={'Prev'} onPress={onPressPrev} />
        <Dots length={length} activeDot={activeDot} />
        <Button text={'Next'} onPress={onPressNext} />
      </View>
    </View>
  );
};

export default DotsExample;

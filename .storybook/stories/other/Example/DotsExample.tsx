import React, {useCallback, useState} from 'react';

import {Button, Dots, rem, View} from '@lad-tech/mobydick-core';

const DotsExample = ({length}: {length: number}) => {
  const [activeDot, setActiveDot] = useState(0);
  const [activeDotFirstHalf, setActiveDotFirstHalf] = useState(2);
  const [activeDotSecondHalf, setActiveDotSecondHalf] = useState(3);

  const onPressPrevFirstHalf = useCallback(() => {
    if (activeDotFirstHalf !== 0) {
      setActiveDotFirstHalf(activeDotFirstHalf - 1);
    }
  }, [activeDotFirstHalf]);
  const onPressNextFirstHalf = useCallback(() => {
    if (activeDotFirstHalf !== length - 1) {
      setActiveDotFirstHalf(activeDotFirstHalf + 1);
    }
  }, [activeDotFirstHalf, length]);
  const onPressPrevOne = useCallback(() => {
    if (activeDot !== 0) {
      setActiveDot(activeDot - 1);
    }
  }, [activeDot]);
  const onPressNextOne = useCallback(() => {
    if (activeDot !== length - 1) {
      setActiveDot(activeDot + 1);
    }
  }, [activeDot, length]);

  const onPressPrevSecondHalf = useCallback(() => {
    if (activeDotSecondHalf !== 0) {
      setActiveDotSecondHalf(activeDotSecondHalf - 1);
    }
  }, [activeDotSecondHalf]);
  const onPressNextSecondHalf = useCallback(() => {
    if (activeDotSecondHalf !== length - 1) {
      setActiveDotSecondHalf(activeDotSecondHalf + 1);
    }
  }, [activeDotSecondHalf, length]);
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: rem(20),
        }}>
        <Button text={'Prev'} onPress={onPressPrevFirstHalf} />
        <Dots length={length} activeDot={activeDotFirstHalf} />
        <Button text={'Next'} onPress={onPressNextFirstHalf} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: rem(20),
        }}>
        <Button text={'Prev'} onPress={onPressPrevOne} />
        <Dots length={length} activeDot={activeDot} />
        <Button text={'Next'} onPress={onPressNextOne} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: rem(20),
        }}>
        <Button text={'Prev'} onPress={onPressPrevSecondHalf} />
        <Dots
          length={length}
          activeDot={activeDotSecondHalf}
          fixedSize={rem(6)}
          activeDotColor={'red'}
        />
        <Button text={'Next'} onPress={onPressNextSecondHalf} />
      </View>
    </View>
  );
};

export default DotsExample;

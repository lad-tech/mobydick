import React, {useCallback, useState} from 'react';

import {Button, Swipe, View} from '@npm/mobydick-core';

const SwipeExample = () => {
  const [isActive, setActive] = useState(false);
  const [isActiveTwo, setActiveTwo] = useState(false);
  const onPress = useCallback(() => {
    setActive(!isActive);
    setActiveTwo(!isActiveTwo);
  }, [isActive]);

  return (
    <>
      <Swipe onPress={setActive} active={isActive} disabled={false} />
      <View style={{padding: 20}}>
        <Swipe onPress={setActiveTwo} active={isActiveTwo} disabled={true} />
      </View>
      <Button onPress={onPress} text={'Изменить состояние'} />
    </>
  );
};

export default SwipeExample;

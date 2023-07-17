import React, {useCallback, useState} from 'react';

import {Button, Swipe, View} from '@lad-tech/mobydick-core';

const SwipeExample = () => {
  const [isActive, setActive] = useState(false);
  const [isActiveTwo, setActiveTwo] = useState(false);

  const onPressCommon = useCallback(() => {
    setActive(isActive => !isActive);
    setActiveTwo(isActiveTwo => !isActiveTwo);
  }, []);

  const onPressOne = useCallback((isActive: boolean) => {
    setActive(isActive);
  }, []);

  const onPressTwo = useCallback(() => {
    setActiveTwo(isActiveTwo => !isActiveTwo);
  }, []);

  return (
    <>
      <Swipe onPress={onPressOne} active={isActive} disabled={false} />
      <View style={{padding: 20}}>
        <Swipe onPress={onPressTwo} active={isActiveTwo} disabled={true} />
      </View>
      <Button onPress={onPressCommon} text={'Изменить состояние'} />
    </>
  );
};

export default SwipeExample;

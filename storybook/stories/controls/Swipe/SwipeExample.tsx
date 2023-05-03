import React, {useCallback, useState} from 'react';

import {Button, Swipe, View} from '@npm/mobydick-core';

const SwipeExample = () => {
  const [isActive, setActive] = useState(false);
  const [isActiveTwo, setActiveTwo] = useState(false);

  const onPressCommon = (isActive: boolean) => {
    setActive(isActive);
    setActiveTwo(!isActiveTwo);
  };

  const onPressOne = (isActive: boolean) => {
    setActive(isActive);
  };

  const onPressTwo = useCallback(() => {
    setActiveTwo(!isActiveTwo);
  }, [isActiveTwo]);

  const onPressCommonCallback = useCallback(
    () => onPressCommon(!isActive),
    [isActive],
  );

  const onPressOneCallback = useCallback(
    (event: boolean) => onPressOne(event),
    [],
  );

  return (
    <>
      <Swipe onPress={onPressOneCallback} active={isActive} disabled={false} />
      <View style={{padding: 20}}>
        <Swipe onPress={onPressTwo} active={isActiveTwo} disabled={true} />
      </View>
      <Button onPress={onPressCommonCallback} text={'Изменить состояние'} />
    </>
  );
};

export default SwipeExample;

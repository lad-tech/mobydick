import React, {useCallback, useState} from 'react';

import {Button, Swipe, View} from '@npm/mobydick-core';

const SwipeExample = () => {
  const [isActive, setActive] = useState(false);
  const onPress = useCallback(() => setActive(!isActive), [isActive]);

  return (
    <>
      <Swipe onPress={setActive} active={isActive} disabled={false} />
      <View style={{padding: 20}}>
        <Swipe onPress={setActive} active={isActive} disabled={true} />
      </View>
      <Button onPress={onPress} text={'Изменить состояние'} />
    </>
  );
};

export default SwipeExample;

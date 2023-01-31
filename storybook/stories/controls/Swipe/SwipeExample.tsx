import React, {useState} from 'react';

import {Swipe, View} from '@npm/mobydick-core';

const SwipeExample = () => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <Swipe onPress={setActive} active={isActive} disabled={false} />
      <View style={{paddingTop: 20}}>
        <Swipe onPress={setActive} active={isActive} disabled={true} />
      </View>
    </>
  );
};

export default SwipeExample;

import {useState} from 'react';

import {Swipe, Title, View} from '@/shared/ui';

export const SwipeWidget = () => {
  const [active, setActive] = useState(false);
  return (
    <View>
      <Title font={'Primary-H5'}>Swipe</Title>
      <Swipe onPress={setActive} active={active} disabled={false} />
    </View>
  );
};

import {useState} from 'react';

import {Swipe, TypographyLegacy, View} from '@/shared/ui';

export const SwipeWidget = () => {
  const [active, setActive] = useState(false);
  return (
    <View>
      <TypographyLegacy font={'Regular-Primary-H5'}>Swipe</TypographyLegacy>
      <Swipe onPress={setActive} active={active} disabled={false} />
    </View>
  );
};

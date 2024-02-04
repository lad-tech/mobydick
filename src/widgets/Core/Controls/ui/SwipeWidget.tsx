import {useState} from 'react';

import {Swipe, Typography, View} from 'shared/ui';

export const SwipeWidget = () => {
  const [active, setActive] = useState(false);
  return (
    <View>
      <Typography font={'Regular-Primary-H5'}>Swipe</Typography>
      <Swipe onPress={setActive} active={active} disabled={false} />
    </View>
  );
};

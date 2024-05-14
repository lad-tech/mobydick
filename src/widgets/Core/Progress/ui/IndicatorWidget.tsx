import {useState} from 'react';

import {Indicator, TouchableOpacity, Typography, View} from '@shared/ui';

export const IndicatorWidget = () => {
  const [percent, setPercent] = useState(10);

  const onPress = () => {
    const randomPercent = Math.random();

    setPercent(randomPercent * 100);
  };

  return (
    <View>
      <Typography font={'Regular-Primary-H5'}>Indicator</Typography>
      <Indicator percent={percent} />
      <TouchableOpacity onPress={onPress}>
        <Typography font={'Regular-Secondary-XS'}>
          Press me to change percent
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

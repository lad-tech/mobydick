import {useState} from 'react';

import {Indicator, TouchableOpacity, TypographyLegacy, View} from '@shared/ui';

export const IndicatorWidget = () => {
  const [percent, setPercent] = useState(10);

  const onPress = () => {
    const randomPercent = Math.random();

    setPercent(randomPercent * 100);
  };

  return (
    <View>
      <TypographyLegacy font={'Regular-Primary-H5'}>Indicator</TypographyLegacy>
      <Indicator percent={percent} />
      <TouchableOpacity onPress={onPress}>
        <TypographyLegacy font={'Regular-Secondary-XS'}>
          Press me to change percent
        </TypographyLegacy>
      </TouchableOpacity>
    </View>
  );
};

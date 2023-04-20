import {Animated} from 'react-native';
import React, {useMemo} from 'react';

import {LABELS} from '../../../other';

import Thumb from './Thumb';

const LowThumb = ({
  lowThumbX,

  size,
}: {
  lowThumbX: Animated.Value;
  size: Animated.Value;
}) => {
  const lowStyles = useMemo(() => {
    return {transform: [{translateX: lowThumbX}]};
  }, [lowThumbX]);

  return (
    <Animated.View
      style={lowStyles}
      accessibilityLabel={LABELS.sliderLayoutLowThumb}>
      <Thumb size={size} />
    </Animated.View>
  );
};

export default LowThumb;

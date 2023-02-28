import {Animated, LayoutChangeEvent} from 'react-native';
import React, {useMemo} from 'react';

import {LABELS} from '../../../other';

import Thumb from './Thumb';

const LowThumb = ({
  lowThumbX,
  handleThumbLayout,
}: {
  lowThumbX: Animated.Value;
  handleThumbLayout: ((event: LayoutChangeEvent) => void) | undefined;
}) => {
  const lowStyles = useMemo(() => {
    return {transform: [{translateX: lowThumbX}]};
  }, [lowThumbX]);

  return (
    <Animated.View
      style={lowStyles}
      onLayout={handleThumbLayout}
      accessibilityLabel={LABELS.sliderLayoutLowThumb}>
      <Thumb name={'low'} />
    </Animated.View>
  );
};

export default LowThumb;

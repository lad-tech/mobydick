import {Animated} from 'react-native';
import React from 'react';

import useStyles from '../../../styles/theme/hooks/useStyles';
import stylesCreate from '../stylesCreate';

import Thumb from './Thumb';

const HighThumb = ({
  highThumbX,
  highSize,
}: {
  highThumbX: Animated.Value;
  highSize: Animated.Value;
}) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <Animated.View
      style={[
        styles.highThumbContainer,
        {transform: [{translateX: highThumbX}]},
      ]}>
      <Thumb size={highSize} />
    </Animated.View>
  );
};

export default HighThumb;

import React from 'react';
import {Animated} from 'react-native';
import {useStyles} from '@npm/mobydick-styles';

import stylesCreate from './stylesCreate';
import Dot from './Dot';

interface IDots {
  length: number;
  activeDot: number;
  maxDots?: number;
}
const Dots = ({length, activeDot}: IDots) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <Animated.View style={styles.dots}>
      {[...Array(length).keys()].map(i => (
        <Dot key={i} active={i === activeDot} />
      ))}
    </Animated.View>
  );
};

export default Dots;

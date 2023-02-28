import {Animated} from 'react-native';
import React from 'react';

import useStyles from '../../../styles/theme/hooks/useStyles';
import stylesCreate from '../stylesCreate';

import Thumb from './Thumb';

const HighThumb = ({highThumbX}: {highThumbX: Animated.Value}) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <Animated.View
      style={[
        styles.highThumbContainer,
        {transform: [{translateX: highThumbX}]},
      ]}>
      <Thumb name={'high'} />
    </Animated.View>
  );
};

export default HighThumb;

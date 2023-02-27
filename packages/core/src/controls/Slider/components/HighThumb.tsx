import {Animated} from 'react-native';
import React, {useMemo} from 'react';

import useStyles from '../../../styles/theme/hooks/useStyles';
import stylesCreate from '../stylesCreate';

import Thumb from './Thumb';

const HighThumb = ({highThumbX}: {highThumbX: Animated.Value}) => {
  const [styles] = useStyles(stylesCreate);
  const highStyles = useMemo(() => {
    return [styles.highThumbContainer, {transform: [{translateX: highThumbX}]}];
  }, [highThumbX]);

  return (
    <Animated.View style={highStyles}>
      <Thumb name={'high'} />
    </Animated.View>
  );
};

export default HighThumb;

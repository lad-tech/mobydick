import {FC, useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

import View from '../../../basic/components/View/View';
import useStyles from '../../../styles/theme/hooks/useStyles';

import stylesCreate from './stylesCreate';
import {IndicatorProps} from './types';

const Indicator: FC<IndicatorProps> = props => {
  const {percent, indicatorViewStyles, indicatorStyles} = props;
  const [styles] = useStyles(stylesCreate);
  const percentAnimated = useRef(new Animated.Value(percent)).current;

  useEffect(() => {
    Animated.timing(percentAnimated, {
      toValue: percent,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [percent]);

  const width = percentAnimated.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.indicatorView, indicatorViewStyles]}>
      <Animated.View
        style={[
          styles.indicator,
          [StyleSheet.absoluteFill],
          {width},
          indicatorStyles,
        ]}
      />
    </View>
  );
};

export default Indicator;

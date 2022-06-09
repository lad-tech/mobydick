import React, {FC, useEffect, useRef, useState} from 'react';
import {useStyles} from '@npm/mobydick-styles';
import {Animated, View} from 'react-native';
import stylesCreate from '@npm/mobydick-progress/src/components/Indicator/stylesCreate';

import {IndicatorProps} from './types';

const Indicator: FC<IndicatorProps> = props => {
  const {
    steps,
    step,
    indicatorColor,
    indicatorHeight,
    indicatorWidth,
    indicatorBorderRadius,
  } = props;
  const [styles] = useStyles(stylesCreate);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const fill = useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const bar = Animated.timing(animatedValue, {
      useNativeDriver: false,
      toValue: fill,
      duration: 300,
    });
    bar.start();

    return () => {
      bar.stop();
      animatedValue.setValue(-1000);
    };
  }, []);

  useEffect(() => {
    if (step <= steps) {
      fill.setValue(-width + (width * step) / steps);
    } else {
      fill.setValue(0);
    }
  }, [step, width]);

  return (
    <>
      <View
        style={[
          styles.indicatorView,
          indicatorBorderRadius ? {borderRadius: indicatorBorderRadius} : null,
          indicatorHeight ? {height: indicatorHeight} : null,
          indicatorWidth ? {width: indicatorWidth} : null,
        ]}
        onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}>
        <Animated.View
          style={[
            styles.indicator,
            indicatorColor ? {backgroundColor: indicatorColor} : null,
            indicatorHeight ? {height: indicatorHeight} : null,
            {transform: [{translateX: animatedValue}]},
          ]}
        />
      </View>
    </>
  );
};

export default Indicator;

import {Pressable} from '@npm/mobydick-core';
import {useStyles, Indicator} from '@npm/mobydick-styles';
import React, {FC, useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';

import stylesCreate from './stylesCreate';
import {PanelSpinnerProps} from './types';

const PanelSpinner: FC<PanelSpinnerProps> = props => {
  const {isSpin, speed = 2500, isError = false, onCancel} = props;
  const [styles, theme] = useStyles(stylesCreate);
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(spinValue, {
        useNativeDriver: true,
        toValue: 1,
        duration: speed,
      }),
    );
    loop.start();
    return () => {
      loop.stop();
      spinValue.setValue(0);
    };
  }, [speed, isSpin]);

  const rotation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {isSpin ? (
        <>
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <Indicator fill={theme.colors.CtaBtnPrimary} />
          </Animated.View>
          {!!onCancel && (
            <Pressable
              style={[
                styles.errorView,
                {backgroundColor: 'green', position: 'absolute'},
              ]}
              onPress={onCancel}
            />
          )}
        </>
      ) : isError ? (
        <View style={styles.errorView}></View>
      ) : (
        <View style={[styles.errorView, {backgroundColor: 'red'}]}></View>
      )}
    </View>
  );
};

export default PanelSpinner;

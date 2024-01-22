import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {IThemeContext, Typography, useStyles} from '@lad-tech/mobydick-core';

import {IGraphState} from './Section';

interface ISectionButtonProps {
  period: string;
  index: number;
  state: SharedValue<IGraphState>;
  transition: SharedValue<number>;
}

const SectionButton = ({
  transition,
  state,
  period,
  index,
}: ISectionButtonProps) => {
  const [styles, {colors}] = useStyles(createStyleFn);

  const animationStyles = useAnimatedStyle(() => {
    const {current, next} = state.value;

    if (index !== current && index !== next) {
      return {backgroundColor: colors.BgAccent};
    }

    if (index === current && index === next) {
      return {backgroundColor: colors.BgAccentHard};
    }

    return {
      backgroundColor: interpolateColor(
        transition.value,
        index === next ? [0, 1] : [1, 0],
        [colors.BgAccent, colors.BgAccentHard],
      ),
    };
  });
  return (
    <TouchableWithoutFeedback
      style={styles.flex}
      onPress={() => {
        state.value = {current: state.value.next, next: index};
        transition.value = 0;
        transition.value = withTiming(1, {
          duration: 750,
        });
      }}>
      <Animated.View style={[styles.container, animationStyles]}>
        <Typography style={styles.text}>{period}</Typography>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const createStyleFn = ({spaces}: IThemeContext) => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: spaces.Space8,
      borderRadius: spaces.Space16,
      margin: spaces.Space4,
    },
    flex: {
      flex: 1,
    },
    text: {
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });
};

export default SectionButton;

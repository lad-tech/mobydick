import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Canvas,
  Group,
  LinearGradient,
  mix,
  RoundedRect,
  vec,
} from '@shopify/react-native-skia';
import {
  SharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Text} from '@lad-tech/mobydick-core';

import {IDataset} from '../types';

const buttonWidth = 50;

export interface IGraphState {
  next: number;
  current: number;
}

interface ISelectionProps {
  state: SharedValue<IGraphState>;
  transition: SharedValue<number>;
  dataset: IDataset;
}

const Selection = ({state, transition, dataset}: ISelectionProps) => {
  const periods = Object.keys(dataset);

  const transform = useDerivedValue(() => {
    const {current, next} = state.value;
    return [
      {
        translateX: mix(
          transition.value,
          current * buttonWidth,
          next * buttonWidth,
        ),
      },
    ];
  });
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Canvas style={StyleSheet.absoluteFill}>
          <Group transform={transform}>
            <RoundedRect x={0} y={0} height={64} width={buttonWidth} r={16}>
              <LinearGradient
                colors={['#31CBD1', '#61E0A1']}
                start={vec(0, 0)}
                end={vec(buttonWidth, 64)}
              />
            </RoundedRect>
          </Group>
        </Canvas>
        {periods.map((period, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => {
              state.value = {current: state.value.next, next: index};
              transition.value = 0;
              transition.value = withTiming(1, {
                duration: 750,
              });
            }}>
            <View style={styles.button}>
              <Text style={styles.label}>{period}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  container: {
    backgroundColor: '#272636',
    borderRadius: 16,
    flexDirection: 'row',
  },
  button: {
    height: 64,
    width: buttonWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default Selection;

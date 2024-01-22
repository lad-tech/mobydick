import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SharedValue} from 'react-native-reanimated';
import {IThemeContext, useStyles} from '@lad-tech/mobydick-core';

import {IDataset} from '../types';

import SectionButton from './SectionButton';

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
  const [styles] = useStyles(createStyleFn);

  const periods = Object.keys(dataset);

  return (
    <View style={styles.container}>
      {periods.map((period, index) => (
        <SectionButton
          key={index}
          index={index}
          period={period}
          state={state}
          transition={transition}
        />
      ))}
    </View>
  );
};

const createStyleFn = ({colors, spaces}: IThemeContext) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',

      justifyContent: 'space-between',
      alignContent: 'stretch',
      alignItems: 'stretch',

      backgroundColor: colors.BgSecondary,

      borderRadius: spaces.Space16,
    },
  });
};

export default Selection;

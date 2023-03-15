import {select} from '@storybook/addon-knobs';
import React from 'react';
import {StyleSheet} from 'react-native';

import {
  IStatusState,
  IStatusType,
  Status,
  useStyles,
  View,
} from '@npm/mobydick-core';

const StatusExample = () => {
  const [styles] = useStyles(stylesCreate);
  const state = select('state', IStatusState, IStatusState.gray);
  return (
    <View style={styles.container}>
      <Status type={IStatusType.dot} state={state} />
      <Status type={IStatusType.tag} state={state} text={'text status'} />
    </View>
  );
};

const stylesCreate = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '30%',
    },
  });

export default StatusExample;

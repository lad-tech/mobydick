import {Pressable} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import React, {FC} from 'react';
import {View} from 'react-native';

import Spinner from '../Spinner';

import stylesCreate from './stylesCreate';
import {PanelSpinnerProps} from './types';

const PanelSpinner: FC<PanelSpinnerProps> = props => {
  const {isLoading, speed = 2500, isError = false, onCancel} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <>
          <Spinner speed={speed} />
          {!!onCancel && (
            <Pressable
              style={[
                styles.errorView,
                {
                  backgroundColor: 'pink',
                  position: 'absolute',
                  width: 10,
                  height: 10,
                },
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

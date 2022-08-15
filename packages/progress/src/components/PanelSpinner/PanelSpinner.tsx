import {Pressable} from '@npm/mobydick-core';
import {SimpleIcon, useStyles} from '@npm/mobydick-styles';
import React, {FC} from 'react';
import {View} from 'react-native';
import rem from '@npm/mobydick-styles/src/spaces/rem';

import Spinner from '../Spinner';
import {ISizeSpinner} from '../Spinner/types';

import stylesCreate from './stylesCreate';
import {PanelSpinnerProps} from './types';

const PanelSpinner: FC<PanelSpinnerProps> = props => {
  const {isLoading, duration = 2500, isError = false, onCancel} = props;
  const [styles, theme] = useStyles(stylesCreate);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <>
          <Spinner duration={duration} size={ISizeSpinner.L} />
          {!!onCancel && (
            <Pressable
              style={[
                styles.insideView,
                {
                  position: 'absolute',
                },
              ]}
              onPress={onCancel}>
              <SimpleIcon name="icon-cancel" color={theme.colors.IconMuted} />
            </Pressable>
          )}
        </>
      ) : isError ? (
        <View
          style={[
            styles.insideView,
            {backgroundColor: theme.colors.BgSecondary},
          ]}>
          <SimpleIcon
            name="icon-cancel"
            size={rem(32)}
            color={theme.colors.IconMuted}
          />
        </View>
      ) : (
        <View style={styles.insideView}>
          <SimpleIcon
            name="icon-check"
            size={rem(48)}
            color={theme.colors.IconBase}
          />
        </View>
      )}
    </View>
  );
};

export default PanelSpinner;

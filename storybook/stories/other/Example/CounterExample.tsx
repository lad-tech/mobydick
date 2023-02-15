import {number, select} from '@storybook/addon-knobs';
import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Counter,
  ICounterSize,
  ICounterTypes,
  rem,
  Typography,
  useTheme,
  View,
} from '@npm/mobydick-core';
import useStyles from '@npm/mobydick-core/src/styles/theme/hooks/useStyles';

const CounterExample = () => {
  const [styles] = useStyles(stylesCreate);
  const {colors, spaces} = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.BgAccentSoft,
        padding: spaces.Space10,
        width: rem(150),
      }}>
      <View style={styles.viewCounter}>
        <Typography>{'primary: '}</Typography>
        <Counter
          count={number('primary count', 8)}
          style={styles.styleCounter}
          type={ICounterTypes.primary}
          size={select('primary size', ICounterSize, ICounterSize.medium)}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'secondary: '}</Typography>
        <Counter
          count={number('secondary count', 28)}
          style={styles.styleCounter}
          type={ICounterTypes.secondary}
          size={select('secondary size', ICounterSize, ICounterSize.medium)}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'tertiary: '}</Typography>
        <Counter
          style={styles.styleCounter}
          count={number('tertiary count', 88)}
          size={select('tertiary size', ICounterSize, ICounterSize.medium)}
        />
      </View>

      <View style={styles.viewCounter}>
        <Typography>{'disabled: '}</Typography>
        <Counter
          count={number('disabled count', 2)}
          style={styles.styleCounter}
          type={ICounterTypes.disabled}
          size={select('disabled size', ICounterSize, ICounterSize.medium)}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'destructive: '}</Typography>
        <Counter
          count={number('destructive count', 132)}
          style={styles.styleCounter}
          type={ICounterTypes.destructive}
          size={select('destructive size', ICounterSize, ICounterSize.medium)}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'custom: '}</Typography>
        <Counter
          style={[
            styles.styleCounter,
            {
              backgroundColor: '#ff0000',
            },
          ]}
          count={number('custom count', 129)}
          maxLength={number('maxLength count', 3)}
          size={select('custom size', ICounterSize, ICounterSize.medium)}
        />
      </View>
    </View>
  );
};

const stylesCreate = () =>
  StyleSheet.create({
    viewCounter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    styleCounter: {
      marginVertical: rem(10),
    },
  });

export default CounterExample;

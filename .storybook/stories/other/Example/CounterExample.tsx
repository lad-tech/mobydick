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
} from '@lad-tech/mobydick-core';
import useStyles from '@lad-tech/mobydick-core/src/styles/theme/hooks/useStyles';

const CounterExample = () => {
  const [styles] = useStyles(stylesCreate);
  const {colors, spaces} = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.BgAccentSoft,
        padding: spaces.Space10,
        width: rem(200),
      }}>
      <View style={styles.viewCounter}>
        <Typography>{'accentLight: '}</Typography>
        <Counter
          count={number('accentLight count', 8)}
          style={styles.styleCounter}
          type={ICounterTypes.accentLight}
          size={select('accentLight size', ICounterSize, ICounterSize.medium)}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'attention: '}</Typography>
        <Counter
          count={number('attention count', 28)}
          style={styles.styleCounter}
          type={ICounterTypes.attention}
          size={select('attention size', ICounterSize, ICounterSize.medium)}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'accent: '}</Typography>
        <Counter
          style={styles.styleCounter}
          count={number('accent count', 88)}
          size={select('accent size', ICounterSize, ICounterSize.medium)}
        />
      </View>

      <View style={styles.viewCounter}>
        <Typography>{'mutedLight: '}</Typography>
        <Counter
          count={number('mutedLight count', 2)}
          style={styles.styleCounter}
          type={ICounterTypes.mutedLight}
          size={select('mutedLight size', ICounterSize, ICounterSize.medium)}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'attentionLight: '}</Typography>
        <Counter
          count={number('attentionLight count', 132)}
          style={styles.styleCounter}
          type={ICounterTypes.attentionLight}
          size={select(
            'attentionLight size',
            ICounterSize,
            ICounterSize.medium,
          )}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'muted: '}</Typography>
        <Counter
          count={number('muted count', 132)}
          style={styles.styleCounter}
          type={ICounterTypes.muted}
          size={select('muted size', ICounterSize, ICounterSize.medium)}
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

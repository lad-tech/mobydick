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

const CounterExample = ({
  accentLightCount,
  accentLightSize,
  attentionCount,
  attentionSize,
  accentCount,
  accentSize,
  mutedCount,
  mutedSize,
  mutedLightCount,
  mutedLightSize,
  attentionLightCount,
  attentionLightSize,
  customCount,
  maxLengthCount,
  customSize,
}: {
  accentLightCount: number;
  accentLightSize: ICounterSize;
  attentionCount: number;
  attentionSize: ICounterSize;
  accentCount: number;
  accentSize: ICounterSize;
  mutedCount: number;
  mutedSize: ICounterSize;
  mutedLightCount: number;
  mutedLightSize: ICounterSize;
  attentionLightCount: number;
  attentionLightSize: ICounterSize;
  customCount: number;
  maxLengthCount: number;
  customSize: ICounterSize;
}) => {
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
          count={accentLightCount}
          style={styles.styleCounter}
          type={ICounterTypes.accentLight}
          size={accentLightSize}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'attention: '}</Typography>
        <Counter
          count={attentionCount}
          style={styles.styleCounter}
          type={ICounterTypes.attention}
          size={attentionSize}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'accent: '}</Typography>
        <Counter
          style={styles.styleCounter}
          count={accentCount}
          size={accentSize}
        />
      </View>

      <View style={styles.viewCounter}>
        <Typography>{'mutedLight: '}</Typography>
        <Counter
          count={mutedLightCount}
          style={styles.styleCounter}
          type={ICounterTypes.mutedLight}
          size={mutedLightSize}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'attentionLight: '}</Typography>
        <Counter
          count={attentionLightCount}
          style={styles.styleCounter}
          type={ICounterTypes.attentionLight}
          size={attentionLightSize}
        />
      </View>
      <View style={styles.viewCounter}>
        <Typography>{'muted: '}</Typography>
        <Counter
          count={mutedCount}
          style={styles.styleCounter}
          type={ICounterTypes.muted}
          size={mutedSize}
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
          count={customCount}
          maxLength={maxLengthCount}
          size={customSize}
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

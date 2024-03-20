import {
  BadgeIndicator,
  Counter,
  createStyles,
  ICounterSize,
  ICounterTypes,
  IIndicatorTypes,
  Typography,
  useStyles,
  View,
} from 'shared/ui';
import Header from 'shared/ui/Header';

export const BadgeWidget = () => {
  const [styles] = useStyles(stylesFn);

  return (
    <View>
      <Header title={'Badge'} />
      <View style={styles.container}>
        <Typography>{'BadgeIndicator'}</Typography>
        <View style={styles.row}>
          <BadgeIndicator type={IIndicatorTypes.primary} />
          <BadgeIndicator type={IIndicatorTypes.secondary} style={{right: 0}} />
        </View>
        <Typography>{'Counter'}</Typography>
        <View style={styles.row}>
          <Counter
            size={ICounterSize.small}
            type={ICounterTypes.accent}
            count={1}
          />
          <Counter type={ICounterTypes.attention} count={99} />
          <Counter type={ICounterTypes.muted} count={999} />
          <Counter type={ICounterTypes.accent} count={999} maxLength={3} />
        </View>
      </View>
    </View>
  );
};

const stylesFn = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space16,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: spaces.Space16,
  },
}));

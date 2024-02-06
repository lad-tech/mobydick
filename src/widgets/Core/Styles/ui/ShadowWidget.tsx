import {createStyles, Typography, useStyles, View} from 'shared/ui';

export const ShadowWidget = () => {
  const [styles] = useStyles(style);
  return (
    <View style={styles.container}>
      <Typography font={'Regular-Primary-H5'}>Shadow</Typography>
      <View style={styles.content}>
        <View style={styles.item}>
          <View style={[styles.box, styles.shadowSmall]} />
          <Typography>shadowSmall</Typography>
        </View>
        <View style={styles.item}>
          <View style={[styles.box, styles.shadowMedium]} />
          <Typography>shadowMedium</Typography>
        </View>
        <View style={styles.item}>
          <View style={[styles.box, styles.shadowLarge]} />
          <Typography>shadowLarge</Typography>
        </View>
      </View>
    </View>
  );
};

const style = createStyles(({shadows, spaces, colors}) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',

    gap: spaces.Space12,
  },
  item: {
    alignItems: 'center',
  },
  box: {
    backgroundColor: colors.BgSecondary,
    margin: spaces.Space8,
    height: spaces.Space64,
    width: spaces.Space64,
  },
  shadowSmall: {
    ...shadows.small,
  },
  shadowMedium: {
    ...shadows.medium,
  },
  shadowLarge: {
    ...shadows.large,
  },
}));

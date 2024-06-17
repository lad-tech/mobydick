import {createStyles, TypographyLegacy, useStyles, View} from '@shared/ui';
import Header from '@shared/ui/Header';

export const ShadowWidget = () => {
  const [styles] = useStyles(style);
  return (
    <View style={styles.container}>
      <Header title={'Shadow'} />
      <View style={styles.content}>
        <View style={styles.item}>
          <View style={[styles.box, styles.shadowSmall]} />
          <TypographyLegacy>shadowSmall</TypographyLegacy>
        </View>
        <View style={styles.item}>
          <View style={[styles.box, styles.shadowMedium]} />
          <TypographyLegacy>shadowMedium</TypographyLegacy>
        </View>
        <View style={styles.item}>
          <View style={[styles.box, styles.shadowLarge]} />
          <TypographyLegacy>shadowLarge</TypographyLegacy>
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

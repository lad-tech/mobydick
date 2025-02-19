import {
  createStyles,
  IconArrowUp,
  IconAvocado,
  IconBackpack,
  useStyles,
  View,
} from '@/shared/ui';
import Header from '@/shared/ui/Header';

export const TablerIconWidget = () => {
  const [styles] = useStyles(style);
  return (
    <View style={styles.container}>
      <Header title={'TablerIcon'} />
      <View style={styles.content}>
        <IconBackpack color={'red'} />
        <IconArrowUp size={50} />
        <IconAvocado strokeWidth={1} size={50} fill={'blue'} color={'purple'} />
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

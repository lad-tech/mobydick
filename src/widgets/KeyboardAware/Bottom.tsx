import {
  Button,
  createStyles,
  TypographyLegacy,
  useStyles,
  View,
} from '@/shared/ui';

export const BottomComponent = () => {
  const [styles] = useStyles(style);
  return (
    <View style={styles.container}>
      <TypographyLegacy>BottomComponents</TypographyLegacy>
      <Button text={'Submit'} />
    </View>
  );
};

const style = createStyles(({shadows, colors, spaces}) => ({
  container: {
    backgroundColor: colors.BgPrimary,
    ...shadows.large,
    alignItems: 'center',
    padding: spaces.Space12,
  },
}));

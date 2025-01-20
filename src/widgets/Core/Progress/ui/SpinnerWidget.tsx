import {
  createStyles,
  ISizeSpinner,
  Spinner,
  useStyles,
  useTheme,
  View,
} from '@/shared/ui';
import Header from '@/shared/ui/Header';

export const SpinnerWidget = () => {
  const {colors} = useTheme();
  const [styles] = useStyles(stylesCreate);

  return (
    <>
      <Header title={'Spinner'} />
      <View style={styles.container}>
        <Spinner size={ISizeSpinner.XS} />
        <Spinner size={ISizeSpinner.XXS} />
        <Spinner size={ISizeSpinner.S} />
        <Spinner size={ISizeSpinner.L} duration={1000} />
        <Spinner size={ISizeSpinner.M} />
        <Spinner fill={colors.BgInverse} />
      </View>
    </>
  );
};

const stylesCreate = createStyles(_ => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
}));

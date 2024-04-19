import {createStyles, ISizeSpinner, Spinner, useTheme, View} from 'shared/ui';
import Header from 'shared/ui/Header';
import useStyles from '@lad-tech/mobydick-core/src/styles/hooks/useStyles';

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
        <Spinner fill={colors.BgContrast} />
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

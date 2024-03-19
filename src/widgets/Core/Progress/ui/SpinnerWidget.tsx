import {StyleSheet} from 'react-native';

import {ISizeSpinner, Spinner, Typography, useTheme, View} from 'shared/ui';

export const SpinnerWidget = () => {
  const {colors} = useTheme();
  return (
    <>
      <Typography font={'Regular-Primary-H5'}>Spinner</Typography>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
